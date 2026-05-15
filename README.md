# 🖨️ PrinterDocs - Repositório Inteligente de Manuais

![Laravel](https://img.shields.io/badge/Laravel-13.x-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)
![React](https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Python](https://img.shields.io/badge/Python-3-3776AB?style=for-the-badge&logo=python&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)

Um sistema corporativo completo para **gestão, indexação inteligente e consulta rápida** de manuais de serviço de impressoras e códigos de erro. Desenvolvido com foco absoluto em agilidade para técnicos em campo.

---

## ✨ Funcionalidades Principais

* **Busca Rápida de Erros:** Digite um código de erro (ex: `SC990-00`) e o sistema localiza exatamente em qual manual e página o técnico encontrará a solução.
* **Processamento de IA e NLP:** Extração ultrarrápida de textos em PDFs gigantescos (1000+ páginas) utilizando Python e a biblioteca PyMuPDF.
* **Visualização Otimizada:** Visualizador de PDFs embutido (React-PDF) com suporte a *HTTP Range Requests*, ou seja, apenas a página que está sendo visualizada é carregada, economizando tempo e franquia de dados do técnico em campo.
* **Interface Selbetti-Style:** UI/UX corporativa moderna desenhada com Tailwind CSS (Shadcn UI), focada em usabilidade e cores profissionais (Verde Esmeralda escuro).

---

## 🛠️ Stack Tecnológica

A arquitetura do projeto foi desenhada para ser Full-Stack reativa:

### Backend ("O Motor")
* **PHP 8.4** & **Laravel 13.x**: Lógica de rotas, API interna, banco de dados, upload de arquivos e filas de processamento.
* **MySQL**: Armazenamento seguro de logs de erros, manuais e dados estruturados.

### Processamento ("O Cérebro")
* **Python 3.x**: Processos chamados em background pelo Laravel.
* **PyMuPDF (`fitz`)**: Motor de extração de alto desempenho.
* **RegEx de Alta Complexidade**: Expressões regulares dinâmicas para catalogar tabelas de códigos de erro de diferentes marcas de impressoras.

### Frontend ("A Cara")
* **React 19** + **Inertia.js**: SPA incrivelmente rápida, sem recarregamento de páginas e totalmente integrada ao ecossistema Laravel.
* **Tailwind CSS v3** & **Lucide React**: Componentes responsivos e iconografia intuitiva.

---

## 🚀 Como Executar Localmente

Você precisará do PHP 8.4+, Composer, Node.js e Python 3 instalados na máquina. O XAMPP ou Herd podem ser utilizados como servidores web locais.

1. **Clone o repositório** e acesse a pasta:
   ```bash
   git clone https://github.com/julianu37/ManuaisRepo.git
   cd ManuaisRepo
   ```

2. **Instale as dependências PHP e JS**:
   ```bash
   composer install
   npm install
   ```

3. **Crie e configure o `.env`**:
   Copie o `.env.example` para `.env`, gere a chave e configure seu banco de dados (MySQL ou SQLite local).
   ```bash
   cp .env.example .env
   php artisan key:generate
   php artisan migrate
   ```

4. **Instale as dependências do Python**:
   ```bash
   python -m pip install PyMuPDF
   ```

5. **Inicie o servidor de desenvolvimento**:
   Abra dois terminais na pasta do projeto.
   
   *Terminal 1 (Vite & React)*:
   ```bash
   npm run dev
   ```
   
   *Terminal 2 (Laravel)*:
   ```bash
   php artisan serve
   ```

Acesse o sistema no navegador: `http://localhost:8000`.

---

## ☁️ Deploy em Produção (Windows / XAMPP)

Para servir o projeto em produção no ambiente Windows usando XAMPP:
* Mova o projeto para dentro da pasta pública `C:\xampp\htdocs\`.
* Rode `npm run build` na pasta do projeto para empacotar a interface React otimizada.
* Configure no `.env`: `APP_ENV=production`, `APP_DEBUG=false`, e `QUEUE_CONNECTION=sync` (para que a IA rode sem precisar do Supervisor do Linux).
* Inicie os módulos do **Apache** e **MySQL** no Painel de Controle do XAMPP e acesse via `localhost`.
