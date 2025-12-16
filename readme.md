🎵 **Spotify Clone – Projeto Full Stack**

---

### 🟢 **Acesso à Aplicação**

A aplicação está disponível para acesso no seguinte link:

**[Clique aqui para acessar o deploy](https://deploy-full-stack-tyj4.onrender.com/)**

Este projeto é uma aplicação full stack inspirada no Spotify, desenvolvida com foco em aprendizado prático de backend, frontend, banco de dados e deploy em nuvem. O objetivo principal não é replicar o Spotify em todos os detalhes, mas sim simular um fluxo real de aplicação web moderna, do banco ao deploy.

---

### 🚀 **Funcionalidades Principais**

🎧 Reprodução de músicas no frontend
🎨 Interface com capas de álbuns e lista de faixas
🔗 Integração frontend + backend via API REST (CORS habilitado)
🗄️ Dados armazenados no MongoDB Atlas
☁️ Deploy em ambiente de produção (Render)

Observação: apesar de existirem várias tracks com imagens diferentes, o áudio utiliza uma lista controlada de músicas armazenadas no banco, simulando um catálogo musical.

---

### 🛠️ **Stack de Tecnologias Utilizadas**

#### **Backend**
- 🟩 **Node.js:** Ambiente de execução para o JavaScript no servidor.
- ⚙️ **Express.js:** Framework para a construção da API REST.
- 🍃 **MongoDB Driver:** Para a comunicação com o banco de dados MongoDB.
- 🔑 **Dotenv:** Para gerenciamento de variáveis de ambiente.
- 🔄 **CORS:** Middleware para habilitar o Cross-Origin Resource Sharing.

#### **Frontend**
- ⚛️ **React:** Biblioteca para a construção da interface de usuário.
- 🌐 **Axios:** Cliente HTTP para realizar requisições à API do backend.
- 🎨 **HTML5 & CSS3:** Estrutura e estilização das páginas.

#### **Banco de Dados**
- 🍃 **MongoDB Atlas:** Serviço de banco de dados NoSQL em nuvem.

#### **Infraestrutura & DevOps**
- ☁️ **Render:** Plataforma de nuvem para o deploy da aplicação.
- 📦 **NPM:** Gerenciador de pacotes do Node.js.
- 🌿 **Git:** Sistema de controle de versão.

---

### 🖥️ **Como Executar o Projeto Localmente**

1.  **Clone o repositório:**
    ```bash
    git clone <https://github.com/MuriloLucena08/deploy-full-stack>
    ```
2.  **Instale as dependências** (na raiz do projeto):
    ```bash
    npm install
    ```
3.  **Configure as variáveis de ambiente:**
    - Crie um arquivo `.env` na pasta `back-end`.
    - Adicione sua `MONGO_URI` do MongoDB Atlas:
      ```
      MONGO_URI=mongodb+srv://...
      ```
4.  **Inicie a aplicação** (na raiz do projeto):
    ```bash
    npm start
    ```

---

### 🧠 **Conceitos Aplicados e Aprendizados**

- **Desenvolvimento de API REST:** Criação de endpoints com Node.js e Express.
- **Integração Full Stack:** Consumo da API no frontend React utilizando Axios.
- **Gerenciamento de CORS:** Configuração para permitir comunicação segura entre domínios diferentes (local e produção).
- **Conexão Segura com Banco de Dados:** Uso de variáveis de ambiente para proteger a string de conexão do MongoDB.
- **Servidor Monolítico:** O build estático do frontend é servido diretamente pelo backend Express, simplificando o deploy.
- **Resolução de Problemas de Deploy:** Experiência prática com desafios comuns em ambientes de produção, como configuração de DNS, variáveis de ambiente e dependências.

---

### 🔐 Segurança

- Nenhuma credencial sensível está "hardcoded" no código.
- Uso de variáveis de ambiente (`.env`) para armazenar dados sensíveis como a string de conexão do banco de dados.
- O arquivo `.env` é devidamente ignorado pelo Git através do `.gitignore`.
- Utilização de um usuário específico no MongoDB com permissões limitadas para a aplicação.

---

### 🔮 Melhorias Futuras

- **Migrar o backend para TypeScript:** Adicionar tipagem estática para aumentar a robustez e facilitar a manutenção do código.
- **Refatorar a arquitetura do backend:** Organizar o código em `routes`, `controllers` e `services` para melhor separação de responsabilidades.
- **Implementar busca e paginação:** Adicionar endpoints para buscar e paginar os resultados de músicas e artistas.
- **Restringir CORS por domínio:** Configurar o CORS para aceitar requisições apenas do domínio do frontend em produção, aumentando a segurança.
- **Implementar cache de dados:** Adicionar uma camada de cache para as requisições mais frequentes, diminuindo a carga no banco de dados e melhorando a performance.

---
Este projeto representa um MVP (Minimum Viable Product) funcional, com foco em aprendizado prático e resolução de problemas reais de desenvolvimento. Ele está em constante evolução e serve como base para melhorias futuras.
<br>
**Deploy em produção concluído com sucesso!** 🚀