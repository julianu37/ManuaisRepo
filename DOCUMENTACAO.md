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

## 🚀 2. Como Implantar o Projeto (XAMPP / Windows)

Como o sistema foi idealizado para ser servido via **XAMPP no Windows**, os requisitos e o passo a passo são bastante simplificados.

**Pré-requisitos do Sistema:**
1. **XAMPP** instalado e configurado no Windows.
2. **PHP 8.4** ativado no XAMPP (Substituindo o original se necessário).
3. **Composer** instalado globalmente no Windows.
4. **Node.js** (v20+) e **NPM** instalados no Windows.
5. **Python 3** instalado no Windows (com suporte ao PIP).

**Passo a passo de Implantação no XAMPP:**
1. Mova a pasta do projeto (ex: `ManuaisRepo`) para dentro da pasta pública do XAMPP: `C:\xampp\htdocs\`.
2. Abra o terminal (PowerShell ou Prompt de Comando) dentro da pasta do projeto e instale as dependências essenciais:
   ```bash
   composer install --optimize-autoloader --no-dev
   npm install
   npm run build
   python -m pip install PyMuPDF
   ```
3. Configure o arquivo de ambiente (`.env`):
   Copie o arquivo `.env.example` para `.env` se ainda não existir, e ajuste as chaves principais:
   * `APP_ENV=production` (ou `local` se ainda for editar o código)
   * `APP_DEBUG=false`
   * `APP_URL=http://localhost/ManuaisRepo/public`
   * `DB_CONNECTION=mysql`
   * `QUEUE_CONNECTION=sync` *(Isso forçará as filas a rodarem instantaneamente, dispensando o uso do Supervisor de Linux).*
4. No **Painel de Controle do XAMPP**, clique em **Start** para os módulos **Apache** e **MySQL**.
5. Acesse o sistema via navegador pelo link configurado na variável `APP_URL`.

> 💡 **Dica Pro (Virtual Host):** 
> Para acessar o sistema por uma URL limpa (ex: `http://printerdocs.local`), sem precisar digitar a subpasta `/public`, abra o arquivo `C:\xampp\apache\conf\extra\httpd-vhosts.conf` e crie um bloco apontando o `DocumentRoot` direto para a pasta `public` do projeto, adicionando também a rota fictícia no arquivo `hosts` do Windows (`C:\Windows\System32\drivers\etc\hosts`).

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
