#!/bin/bash

# ==============================================================================
# Script de Instalação Automatizada - Oracle Cloud VPS (Ubuntu 20.04/22.04/24.04)
# Projeto: PrinterDocs (paineldev.com.br)
# ==============================================================================

# Cores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

if [ "$EUID" -ne 0 ]; then
  echo -e "${RED}❌ Por favor, execute este script como root (sudo su -).${NC}"
  exit 1
fi

echo -e "${BLUE}==============================================================${NC}"
echo -e "${GREEN} Iniciando Setup Automatizado - PrinterDocs (Oracle Cloud)${NC}"
echo -e "${BLUE}==============================================================${NC}\n"

# 1. Configurar Variáveis Iniciais
echo -e "${YELLOW}Antes de começarmos, precisamos de algumas informações:${NC}"
read -p "🔑 Digite a senha desejada para o banco de dados MySQL [printer_user]: " DB_PASS
read -p "📧 Digite seu e-mail (necessário para o certificado SSL grátis): " SSL_EMAIL
read -p "⚙️  Deseja instalar e configurar o Supervisor (Filas em background para IA)? (s/n): " INSTALL_SUPERVISOR

# Impede que o Linux abra telas interativas rosas de configuração no meio da instalação
export DEBIAN_FRONTEND=noninteractive

# 2. Limpar Iptables da Oracle
echo -e "\n${YELLOW}>> Desativando iptables (Oracle Default)...${NC}"
iptables -F
iptables -X
iptables -t nat -F
iptables -t nat -X
iptables -t mangle -F
iptables -t mangle -X
iptables -P INPUT ACCEPT
iptables -P FORWARD ACCEPT
iptables -P OUTPUT ACCEPT

apt update
apt install iptables-persistent -y
netfilter-persistent save > /dev/null 2>&1
netfilter-persistent reload > /dev/null 2>&1

# 3. Criar Memória Swap (2GB) para prevenir Out Of Memory (OOM) em VPS de 1GB
echo -e "\n${YELLOW}>> Configurando Memória Swap (2GB)...${NC}"
if [ -f /swapfile ]; then
    echo -e "${RED}Swap já existe. Pulando etapa.${NC}"
else
    fallocate -l 2G /swapfile
    chmod 600 /swapfile
    mkswap /swapfile
    swapon /swapfile
    echo '/swapfile none swap sw 0 0' >> /etc/fstab
    sysctl vm.swappiness=10
    echo 'vm.swappiness=10' >> /etc/sysctl.conf
    echo -e "${GREEN}Swap de 2GB criado com sucesso!${NC}"
fi

# 4. Atualizar Pacotes e Dependências
echo -e "${YELLOW}>> Atualizando o sistema e instalando dependências base...${NC}"
apt upgrade -y
apt install software-properties-common curl git unzip nano -y

# 5. Instalar PHP 8.4, Nginx e MySQL
echo -e "${YELLOW}>> Instalando Nginx, MySQL e PHP 8.4...${NC}"
apt install nginx mysql-server -y
add-apt-repository ppa:ondrej/php -y
apt update
apt install php8.4 php8.4-fpm php8.4-mysql php8.4-mbstring php8.4-xml php8.4-curl php8.4-zip php8.4-sqlite3 php8.4-bcmath php8.4-intl -y

# 6. Instalar Node.js e Composer
echo -e "${YELLOW}>> Instalando Node.js (v20) e Composer...${NC}"
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs
curl -sS https://getcomposer.org/installer | php
mv composer.phar /usr/local/bin/composer
chmod +x /usr/local/bin/composer

# 7. Instalar Python 3 e PyMuPDF
echo -e "${YELLOW}>> Instalando Python e PyMuPDF...${NC}"
apt install python3 python3-pip -y
pip install PyMuPDF --break-system-packages

# 8. Configurar Banco de Dados
echo -e "${YELLOW}>> Configurando Banco de Dados MySQL...${NC}"
mysql -u root -e "CREATE DATABASE IF NOT EXISTS printerdocs;"
mysql -u root -e "CREATE USER IF NOT EXISTS 'printer_user'@'localhost' IDENTIFIED BY '${DB_PASS}';"
mysql -u root -e "GRANT ALL PRIVILEGES ON printerdocs.* TO 'printer_user'@'localhost';"
mysql -u root -e "FLUSH PRIVILEGES;"

# 9. Clonar Repositório
echo -e "${YELLOW}>> Clonando repositório do Github...${NC}"
cd /var/www
if [ -d "paineldev" ]; then
    echo -e "${RED}A pasta /var/www/paineldev já existe. Pulando clone.${NC}"
else
    git clone https://github.com/julianu37/ManuaisRepo.git paineldev
fi

cd /var/www/paineldev

# 10. Configurar .env
echo -e "${YELLOW}>> Configurando arquivo .env...${NC}"
cp .env.example .env
sed -i 's/APP_ENV=local/APP_ENV=production/' .env
sed -i 's/APP_DEBUG=true/APP_DEBUG=false/' .env
sed -i 's|APP_URL=http://localhost|APP_URL=https://paineldev.com.br|' .env
sed -i 's/DB_CONNECTION=sqlite/DB_CONNECTION=mysql/' .env
sed -i 's/# DB_HOST=127.0.0.1/DB_HOST=127.0.0.1/' .env
sed -i 's/# DB_PORT=3306/DB_PORT=3306/' .env
sed -i 's/# DB_DATABASE=laravel/DB_DATABASE=printerdocs/' .env
sed -i 's/# DB_USERNAME=root/DB_USERNAME=printer_user/' .env
sed -i "s/# DB_PASSWORD=/DB_PASSWORD=${DB_PASS}/" .env

if [[ "$INSTALL_SUPERVISOR" == "s" || "$INSTALL_SUPERVISOR" == "S" ]]; then
    sed -i 's/QUEUE_CONNECTION=sync/QUEUE_CONNECTION=database/' .env
else
    sed -i 's/QUEUE_CONNECTION=database/QUEUE_CONNECTION=sync/' .env
fi

# 11. Build do Laravel e Permissões
echo -e "${YELLOW}>> Instalando pacotes e fazendo build (Isso pode demorar alguns minutos)...${NC}"
composer install --optimize-autoloader --no-dev
php artisan key:generate --force
php artisan migrate --force
php artisan db:seed --force
php artisan storage:link

npm install
npm run build

echo -e "${YELLOW}>> Ajustando permissões...${NC}"
chown -R www-data:www-data /var/www/paineldev
find /var/www/paineldev -type f -exec chmod 664 {} \;
find /var/www/paineldev -type d -exec chmod 775 {} \;
chmod -R 775 /var/www/paineldev/storage
chmod -R 775 /var/www/paineldev/bootstrap/cache

# 12. Configurar Nginx
echo -e "${YELLOW}>> Configurando Nginx para paineldev.com.br...${NC}"
cat > /etc/nginx/sites-available/paineldev << 'EOF'
server {
    listen 80;
    server_name paineldev.com.br www.paineldev.com.br;
    root /var/www/paineldev/public;

    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-Content-Type-Options "nosniff";
    index index.php;
    charset utf-8;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    error_page 404 /index.php;

    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php8.4-fpm.sock;
        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        include fastcgi_params;
    }

    location ~ /\.(?!well-known).* {
        deny all;
    }
}
EOF

ln -sf /etc/nginx/sites-available/paineldev /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default
systemctl restart nginx

# 13. Supervisor (Opcional)
if [[ "$INSTALL_SUPERVISOR" == "s" || "$INSTALL_SUPERVISOR" == "S" ]]; then
    echo -e "${YELLOW}>> Configurando Supervisor para processamento em background...${NC}"
    apt install supervisor -y
    cat > /etc/supervisor/conf.d/paineldev-worker.conf << 'EOF'
[program:paineldev-worker]
process_name=%(program_name)s_%(process_num)02d
command=php /var/www/paineldev/artisan queue:work database --sleep=3 --tries=3 --max-time=3600
autostart=true
autorestart=true
stopasgroup=true
killasgroup=true
user=www-data
numprocs=2
redirect_stderr=true
stdout_logfile=/var/www/paineldev/storage/logs/worker.log
EOF
    supervisorctl reread
    supervisorctl update
    supervisorctl start paineldev-worker:*
fi

# 14. SSL Certbot
echo -e "\n${YELLOW}>> Iniciando instalação do SSL (Cadeado Verde HTTPS)...${NC}"
echo -e "${RED}⚠️  ATENÇÃO: O domínio paineldev.com.br precisa estar apontando para o IP desta VPS!${NC}"
apt install certbot python3-certbot-nginx -y
certbot --nginx --non-interactive --agree-tos -m "$SSL_EMAIL" -d paineldev.com.br -d www.paineldev.com.br

# Cache final
echo -e "${YELLOW}>> Otimizando Laravel...${NC}"
cd /var/www/paineldev
php artisan config:cache
php artisan route:cache
php artisan view:cache

echo -e "\n${GREEN}==============================================================${NC}"
echo -e "${GREEN} ✅ Deploy finalizado com sucesso! Acesse https://paineldev.com.br${NC}"
echo -e "${GREEN}==============================================================${NC}\n"
