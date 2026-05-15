# 🖨️ PrinterDocs - Repositório Inteligente de Manuais

Um sistema corporativo completo para gestão, indexação inteligente e consulta rápida de manuais de serviço de impressoras e códigos de erro. Desenvolvido com foco absoluto em agilidade para técnicos em campo.

---

## 🛠️ 1. Stack Tecnológico (Ferramentas Utilizadas)

O projeto foi construído utilizando uma arquitetura moderna Full-Stack, unindo a robustez do Laravel com a reatividade do React.

### Backend (Motor e Lógica)
* **PHP 8.4:** Linguagem base do servidor.
* **Laravel 13.x:** Framework backend responsável por rotas, autenticação, banco de dados e upload seguro de arquivos.
* **MySQL:** Banco de dados relacional poderoso e escalável, garantindo consistência, alta performance e integridade dos dados e logs de falhas.

### Processamento de IA / Extração (O "Cérebro")
* **Python 3.x:** Utilizado rodando em background (invocado pelo PHP).
* **PyMuPDF (`fitz`):** Biblioteca de altíssima performance para leitura e extração de texto de arquivos PDF pesados (+1000 páginas em ~3 segundos).
* **Expressões Regulares (Regex):** Lógica sofisticada (Lookaheads) armazenada no banco de dados para encontrar códigos exatos (ex: `SC990-00`) ignorando textos lixos em tabelas de logs.

### Frontend (Interface e UX)
* **React 19:** Biblioteca JavaScript para construção da interface web.
* **Inertia.js:** Ponte mágica que conecta o Laravel ao React sem precisar criar uma API REST (SPA seamless).
* **Tailwind CSS v3:** Framework de estilos utilitários. Usado para criar a identidade visual corporativa (Verde Esmeralda escuro/Selbetti).
* **Shadcn UI & Lucide React:** Componentes acessíveis e biblioteca de ícones vetoriais perfeitos.
* **React-PDF (`pdfjs-dist`):** Visualizador de PDF embarcado que suporta "HTTP Range Requests" (baixa apenas os kilobytes da página que o técnico está lendo, economizando dados).

---

## 🚀 2. Como Implantar o Projeto Externamente (Produção - VPS Ubuntu 24.04)

Para colocar o projeto em produção, recomendamos uma VPS (DigitalOcean, Hostinger, AWS) rodando **Ubuntu 24.04 LTS**. Siga o passo a passo abaixo (execute como `root`):

### 2.1 Preparando o Servidor e Dependências

**Atualizar o sistema e repositórios base:**
```bash
apt update && apt upgrade -y
apt install software-properties-common curl git unzip -y
```

**Instalar PHP 8.4 e extensões vitais:**
Adicione o repositório oficial do PHP para Ubuntu e instale as dependências.
```bash
add-apt-repository ppa:ondrej/php -y
apt update
apt install php8.4 php8.4-fpm php8.4-mysql php8.4-mbstring php8.4-xml php8.4-curl php8.4-zip php8.4-sqlite3 php8.4-bcmath php8.4-intl -y
```

**Instalar Nginx, MySQL e Supervisor:**
```bash
apt install nginx mysql-server supervisor -y
```

**Instalar Node.js (v20), NPM e Composer:**
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs
curl -sS https://getcomposer.org/installer | php
mv composer.phar /usr/local/bin/composer
```

**Instalar Python 3 e PIP (para Inteligência do PyMuPDF):**
No Ubuntu 24.04, pacotes globais exigem a flag `--break-system-packages` em servidores isolados (ou criar um venv).
```bash
apt install python3 python3-pip -y
pip install PyMuPDF --break-system-packages
```

### 2.2 Configurando Banco de Dados e phpMyAdmin

Configure o **MySQL**:
```bash
mysql -u root -p
```
*No terminal do MySQL, digite:*
```sql
CREATE DATABASE printerdocs;
CREATE USER 'printer_user'@'localhost' IDENTIFIED BY 'sua_senha_forte';
GRANT ALL PRIVILEGES ON printerdocs.* TO 'printer_user'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

Instale o **phpMyAdmin** para gerenciar o banco visualmente (Opcional):
```bash
apt install phpmyadmin -y
```
*(Na tela rosa de seleção do servidor web, pressione **TAB e ENTER sem marcar nada**, pois configuraremos no Nginx manualmente).*

Crie um link simbólico para o Nginx ler o phpMyAdmin:
```bash
ln -s /usr/share/phpmyadmin /var/www/html/phpmyadmin
```
*Acesse por: `http://ip-do-seu-servidor/phpmyadmin`*

### 2.3 Instalando o Projeto Laravel

Vá para a pasta web e clone o repositório:
```bash
cd /var/www
git clone https://github.com/julianu37/ManuaisRepo.git printerdocs
cd printerdocs
```

Prepare o **Ambiente (.env)** e instale as bibliotecas:
```bash
cp .env.example .env
nano .env
```
*Ajuste no arquivo:*
```env
APP_ENV=production
APP_DEBUG=false
APP_URL=https://seusite.com.br
DB_DATABASE=printerdocs
DB_USERNAME=printer_user
DB_PASSWORD=sua_senha_forte
QUEUE_CONNECTION=database
```

Gere a chave e prepare os bancos e links:
```bash
composer install --optimize-autoloader --no-dev
php artisan key:generate
php artisan migrate --force
php artisan storage:link
npm install
npm run build
```

**Ajuste de Permissões Críticas:**
O servidor web Nginx roda sob o usuário `www-data`. Precisamos dar as permissões exatas:
```bash
chown -R www-data:www-data /var/www/printerdocs
find /var/www/printerdocs -type f -exec chmod 664 {} \;
find /var/www/printerdocs -type d -exec chmod 775 {} \;
chmod -R 775 /var/www/printerdocs/storage
chmod -R 775 /var/www/printerdocs/bootstrap/cache
```

### 2.4 Configurando o Domínio e SSL (Nginx)

Crie o arquivo de configuração de rota do seu domínio:
```bash
nano /etc/nginx/sites-available/printerdocs
```
*Cole o seguinte conteúdo (Lembre-se de mudar `seusite.com.br`):*
```nginx
server {
    listen 80;
    server_name seusite.com.br;
    root /var/www/printerdocs/public;

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
```

Ative o site e reinicie:
```bash
ln -s /etc/nginx/sites-available/printerdocs /etc/nginx/sites-enabled/
nginx -t
systemctl restart nginx
```

**Gere o Certificado SSL grátis (Cadeado Verde / HTTPS):**
```bash
apt install certbot python3-certbot-nginx -y
certbot --nginx -d seusite.com.br
```

### 2.5 Configurando o Supervisor (Jobs em Background)

O `Supervisor` mantém as filas do Laravel (como a IA extraindo PDFs gigantes) rodando sem parar.

Crie o arquivo do worker:
```bash
nano /etc/supervisor/conf.d/printerdocs-worker.conf
```
*Cole o conteúdo:*
```ini
[program:printerdocs-worker]
process_name=%(program_name)s_%(process_num)02d
command=php /var/www/printerdocs/artisan queue:work database --sleep=3 --tries=3 --max-time=3600
autostart=true
autorestart=true
stopasgroup=true
killasgroup=true
user=www-data
numprocs=2
redirect_stderr=true
stdout_logfile=/var/www/printerdocs/storage/logs/worker.log
```

Atualize o Supervisor para aplicar a nova regra:
```bash
supervisorctl reread
supervisorctl update
supervisorctl start printerdocs-worker:*
```

**Por fim, aplique um cache final de produção:**
```bash
cd /var/www/printerdocs
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

Pronto! Seu sistema está 100% otimizado, seguro e rodando na internet.

---

## 🔌 3. Guia Rápido: Como Ligar o Projeto Localmente

Como você irá reiniciar o computador, toda vez que quiser trabalhar ou rodar o sistema localmente, abra o **PowerShell** ou **Terminal**, navegue até a pasta do projeto (`cd C:\Users\revenda33\Desktop\projeto`) e execute os comandos abaixo.

*(Importante: Como você usa o Herd Lite, certifique-se de que o PHP e o NPM do seu computador estejam acessíveis no sistema, ou abra o terminal do próprio Herd)*.

### Passo 1: Ligar o Motor Visual (React/Tailwind)
Abra uma aba do terminal e rode:
```bash
npm run dev
```
*(Deixe essa aba aberta e minimizada. É ela quem atualiza a tela na hora quando você muda uma cor ou texto).*

### Passo 2: Ligar o Servidor Backend (Laravel)
Abra uma **segunda** aba do terminal e rode:
```bash
php artisan serve
```
Isso vai criar o endereço `http://localhost:8000`.

### Passo 3: (Apenas se alterar para filas Assíncronas)
*Nota: Atualmente configurei seu `.env` com `QUEUE_CONNECTION=sync` para processar na hora. Mas se você voltar para `database` no futuro, precisará de uma terceira aba rodando:*
```bash
php artisan queue:work
```

**Pronto!** O sistema estará 100% no ar e funcionando perfeitamente, pronto para indexar novos manuais.
