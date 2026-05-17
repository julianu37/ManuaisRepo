# ☁️ Guia de Deploy Definitivo - Oracle Cloud VPS (Ubuntu)

Este guia cobre a configuração do zero (servidor zerado) de uma VPS da **Oracle Cloud** rodando **Ubuntu 20.04, 22.04 ou 24.04**. 
O domínio a ser utilizado é **`paineldev.com.br`**.

A infraestrutura Oracle tem uma peculiaridade rígida com o firewall (iptables) que bloqueia as portas 80 (HTTP) e 443 (HTTPS) por padrão. O primeiro passo resolve esse bloqueio.

---

## 🛠️ Passo 1: Liberação de Firewall e Preparação

Acesse sua VPS via SSH e execute todos os comandos abaixo como **ROOT** (se não estiver como root, use `sudo su -`).

### 1.1. Desativar / Limpar o iptables (Padrão Oracle)
As instâncias da Oracle vêm com regras rígidas de iptables. Vamos liberar o tráfego limpando as regras e salvando:

```bash
# Limpa todas as regras
iptables -F
iptables -X
iptables -t nat -F
iptables -t nat -X
iptables -t mangle -F
iptables -t mangle -X
iptables -P INPUT ACCEPT
iptables -P FORWARD ACCEPT
iptables -P OUTPUT ACCEPT

# Salva as regras zeradas para sobreviverem a um reboot
netfilter-persistent save
netfilter-persistent reload
```
*(⚠️ **Atenção:** Certifique-se também de ir no painel Web da Oracle Cloud > "Virtual Cloud Networks" > "Security Lists" e adicionar regras de Entrada/Ingress para as portas **80** e **443**)*.

### 1.2. Atualização e Softwares Básicos
```bash
apt update && apt upgrade -y
apt install software-properties-common curl git unzip nano -y
```

### 1.3. Criando Memória Swap (Anti-Travamentos)
Servidores cloud gratuitos da Oracle geralmente vêm com apenas 1GB de RAM. Rodar o Laravel, React (NPM) e inteligência artificial (PyMuPDF) pode esgotar a RAM instantaneamente. Vamos criar **2GB de arquivo de Swap** (uma "RAM virtual" no SSD) para o servidor nunca cair:

```bash
fallocate -l 2G /swapfile
chmod 600 /swapfile
mkswap /swapfile
swapon /swapfile
echo '/swapfile none swap sw 0 0' >> /etc/fstab
sysctl vm.swappiness=10
echo 'vm.swappiness=10' >> /etc/sysctl.conf
```

---

## ⚙️ Passo 2: Instalação do PHP 8.4, Nginx e MySQL

### 2.1. Nginx, MySQL e Supervisor
```bash
apt install nginx mysql-server supervisor -y
```

### 2.2. PHP 8.4, Extensões e Limites de Upload (1GB)
O Ubuntu padrão não vem com o PHP 8.4. Vamos adicionar o repositório oficial e instalar:
```bash
add-apt-repository ppa:ondrej/php -y
apt update
apt install php8.4 php8.4-fpm php8.4-mysql php8.4-mbstring php8.4-xml php8.4-curl php8.4-zip php8.4-sqlite3 php8.4-bcmath php8.4-intl -y

# Aumentar limites de upload para 1GB (necessário para PDFs pesados e ZIPs de manuais Epson)
sed -i 's/upload_max_filesize = .*/upload_max_filesize = 1G/' /etc/php/8.4/fpm/php.ini
sed -i 's/post_max_size = .*/post_max_size = 1G/' /etc/php/8.4/fpm/php.ini
systemctl restart php8.4-fpm
```

### 2.3. Node.js (v20), NPM e Composer
```bash
# Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

# Composer
curl -sS https://getcomposer.org/installer | php
mv composer.phar /usr/local/bin/composer
```

### 2.4. Python 3 e PyMuPDF (Para inteligência IA)
```bash
apt install python3 python3-pip -y
pip install PyMuPDF --break-system-packages
```

---

## 🗄️ Passo 3: Banco de Dados

Vamos criar o banco de dados e o usuário no MySQL.
```bash
mysql -u root
```
Dentro do MySQL, cole linha por linha:
```sql
CREATE DATABASE printerdocs;
CREATE USER 'printer_user'@'localhost' IDENTIFIED BY 'sua_senha_forte_aqui';
GRANT ALL PRIVILEGES ON printerdocs.* TO 'printer_user'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

---

## 🚀 Passo 4: Clonagem e Configuração do Laravel

### 4.1. Baixar o Repositório
```bash
cd /var/www
git clone https://github.com/julianu37/ManuaisRepo.git paineldev
cd paineldev
```

### 4.2. Variáveis de Ambiente (.env)
Copie o arquivo base e edite:
```bash
cp .env.example .env
nano .env
```
Altere no arquivo `.env` para que fique exatamente assim:
```env
APP_ENV=production
APP_DEBUG=false
APP_URL=https://paineldev.com.br

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=printerdocs
DB_USERNAME=printer_user
DB_PASSWORD=sua_senha_forte_aqui

QUEUE_CONNECTION=database
```
*Salve e feche o Nano (Ctrl+O, Enter, Ctrl+X).*

### 4.3. Instalação e Build
```bash
composer install --optimize-autoloader --no-dev
php artisan key:generate
php artisan migrate --force

# ATENÇÃO: O comando abaixo é CRÍTICO! Sem ele, PDFs e manuais HTML (Epson) extraídos darão erro 403/404.
php artisan storage:link

npm install
npm run build
```

### 4.4. Permissões Essenciais
O Nginx e o PHP rodam sob o usuário `www-data`.
```bash
chown -R www-data:www-data /var/www/paineldev
find /var/www/paineldev -type f -exec chmod 664 {} \;
find /var/www/paineldev -type d -exec chmod 775 {} \;
chmod -R 775 /var/www/paineldev/storage
chmod -R 775 /var/www/paineldev/bootstrap/cache
```

---

## 🌐 Passo 5: Domínio `paineldev.com.br`, Nginx e SSL (HTTPS)

### 5.1. Criando o Server Block do Nginx
```bash
nano /etc/nginx/sites-available/paineldev
```
Cole o conteúdo abaixo:
```nginx
server {
    listen 80;
    server_name paineldev.com.br www.paineldev.com.br;
    root /var/www/paineldev/public;

    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-Content-Type-Options "nosniff";
    index index.php;
    charset utf-8;
    
    # Fundamental para suportar os uploads de arquivos ZIP/PDF de até 1GB
    client_max_body_size 1G;

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
```

### 5.2. Ativar o Site e Testar Nginx
```bash
ln -s /etc/nginx/sites-available/paineldev /etc/nginx/sites-enabled/
# Remove o site padrão do Nginx para não conflitar
rm /etc/nginx/sites-enabled/default
nginx -t
systemctl restart nginx
```

### 5.3. Gerar Certificado SSL (HTTPS Grátis)
*(Importante: Neste momento, o seu domínio `paineldev.com.br` já DEVE estar apontado (DNS tipo A) para o IP da sua VPS Oracle)*
```bash
apt install certbot python3-certbot-nginx -y
certbot --nginx -d paineldev.com.br -d www.paineldev.com.br
```
*Responda as perguntas na tela com seu email de administrador.*

---

## 🤖 Passo 6: Filas em Background (Supervisor)

As rotinas de leitura de grandes manuais não podem travar a tela do usuário, elas rodam no fundo.

### 6.1. Criar o worker do Supervisor
```bash
nano /etc/supervisor/conf.d/paineldev-worker.conf
```
Cole:
```ini
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
```

### 6.2. Ativar o Supervisor
```bash
supervisorctl reread
supervisorctl update
supervisorctl start paineldev-worker:*
```

---

## ⚡ Passo 7: Cache de Produção Final

Para deixar o Laravel ultra-rápido:
```bash
cd /var/www/paineldev
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

✅ **Tudo pronto! Seu sistema agora roda liso e seguro na Oracle Cloud no domínio paineldev.com.br.**
