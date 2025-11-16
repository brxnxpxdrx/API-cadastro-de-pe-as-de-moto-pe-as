# 🛒 API de Gerenciamento de Loja (Peças, Serviços e Usuários)

Esta é uma API desenvolvida em **Node.js**, usando **Express**, **MongoDB/Mongoose** e **JWT**, com o objetivo de gerenciar **peças**, **serviços** e **usuários**, além de controlar acesso por meio de autenticação com **JSON Web Token**.

---

## 🚀 Funcionalidades

### 👤 Usuários
- Cadastro de usuário  
- Login com autenticação JWT  
- Controle de acesso por token  

### 🧩 Peças
- Cadastrar peças  
- Listar peças  
- Atualizar peças  
- Deletar peças  

### 🛠 Serviços
- Cadastrar serviços  
- Listar serviços  

### 🔐 Segurança
- Middleware de autenticação JWT  
- Rotas privadas só acessíveis com token válido  

---

## 🧰 Tecnologias Utilizadas

- **Node.js**
- **Express**
- **Mongoose (MongoDB)**
- **dotenv**
- **JWT (jsonwebtoken)**
- **CORS**

---

## 📁 Estrutura do Projeto

/api
├── api.js
├── CadastroUsuarios.js
├── CadastroPecas.js
├── CadastroServicos.js
├── package.json
└── .env



---

## ⚙️ Configuração das Variáveis de Ambiente

Crie um arquivo **.env** na raiz do projeto com:

MONGO_URI=sua_string_de_conexao_do_mongo
SECRET_KEY=sua_chave_secreta_jwt



---

## 📦 Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
npm install
▶️ Executando o Servidor
bash
Copiar código
npm start
Servidor disponível em:

arduino
Copiar código
http://localhost:3000
🔐 Autenticação JWT
A API utiliza autenticação via JSON Web Token.
O token deve ser enviado no header:

makefile
Copiar código
Authorization: seuTokenAqui
📌 Obs: não é necessário usar Bearer antes do token.

📌 Rotas da API
🔓 Rotas Públicas
➤ POST /cadastro-usuario
Cadastra um novo usuário.

Body exemplo:

json
Copiar código
{
  "nome": "Bruno",
  "senha": "1234"
}
➤ POST /login
Faz login e retorna o token JWT.

Resposta exemplo:

json
Copiar código
{
  "token": "aqui_vai_o_token"
}
🔒 Rotas Privadas (Token obrigatório)
📦 Peças
➤ GET /
Lista todas as peças cadastradas.

➤ POST /cadastro
Cadastra uma nova peça.

➤ PUT /atualizar/:id
Atualiza uma peça.

➤ DELETE /deletar/:id
Deleta uma peça pelo ID.

🛠 Serviços
➤ POST /cadastro-servicos
Cadastra um novo serviço.

➤ GET /lista-servicos
Lista todos os serviços.

🧑‍💻 Autor
Desenvolvido por Bruno Siqueira
Projeto open-source.
