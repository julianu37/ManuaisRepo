# 🖨️ PrinterDocs - Repositório Inteligente de Manuais

Um sistema corporativo completo para gestão, indexação inteligente e consulta rápida de manuais de serviço de impressoras e códigos de erro. Desenvolvido com foco absoluto em agilidade para técnicos em campo.

---

## 🛠️ 1. Stack Tecnológico (Ferramentas Utilizadas)

O projeto foi construído utilizando uma arquitetura moderna Full-Stack, unindo a robustez do Laravel com a reatividade do React.

### Backend (Motor e Lógica)
* **PHP 8.4:** Linguagem base do servidor.
* **Laravel 11.x:** Framework backend responsável por rotas, autenticação, banco de dados e upload seguro de arquivos.
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

## 🚀 2. Como Implantar o Projeto Externamente (Produção)

Para tirar o projeto do seu computador local e colocá-lo "na nuvem" (acessível para qualquer técnico no celular), você precisará de uma hospedagem tipo VPS (Ex: DigitalOcean, AWS EC2, Hetzner, Hostinger VPS).

**Pré-requisitos do Servidor Web (Linux Ubuntu 24.04 recomendado):**
1. Nginx ou Apache instalado.
2. PHP 8.4 e dependências (`php-fpm`, `php-sqlite3` ou `php-mysql`, `php-mbstring`, etc).
3. Composer instalado globalmente.
4. Node.js (v20+) e NPM.
5. Python 3 e o instalador de pacotes PIP.

**Passo a passo resumido de Implantação:**
1. Clone o código-fonte no servidor web (pasta `/var/www/printerdocs`).
2. Rode `composer install --optimize-autoloader --no-dev`.
3. Rode `npm install` e depois `npm run build` (para compilar o visual para produção).
4. Rode `python3 -m pip install PyMuPDF`.
5. Configure o arquivo `.env` para produção:
   * `APP_ENV=production`
   * `APP_DEBUG=false`
   * `APP_URL=https://seusite.com.br`
   * `QUEUE_CONNECTION=database` *(É altamente recomendado usar fila no servidor)*.
6. Dê permissão de escrita para as pastas vitais do Laravel: 
   * `chmod -R 775 storage bootstrap/cache`
7. **Supervisor:** Como o upload de manuais é pesado, em produção você deve configurar o software Linux `Supervisor` para manter o comando `php artisan queue:work` rodando 24 horas por dia em background.

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
