
🛒 API de Gerenciamento de Loja

API para gerenciar peças, serviços e usuários, com autenticação JWT e rotas privadas.

🚀 Funcionalidades

Cadastro de usuário

Login com autenticação JWT

Rotas protegidas

CRUD de Peças

CRUD de Serviços

Integração com MongoDB Atlas

CORS ativo

Projeto usando módulos ES (import/export)

🧰 Tecnologias Utilizadas

Node.js

Express

Mongoose

JWT

dotenv

CORS

📁 Estrutura do Projeto
/api
 ├── api.js
 ├── CadastroUsuarios.js
 ├── CadastroPecas.js
 ├── CadastroServicos.js
 ├── package.json
 └── .env

⚙️ Variáveis de Ambiente

Crie um arquivo .env:

MONGO_URI=sua_string_mongodb
SECRET_KEY=sua_chave_jwt

📦 Instalação
git clone https://github.com/seu-user/seu-repo.git
cd seu-repo
npm install

▶ Rodando o Projeto
npm start


Servidor:

http://localhost:3000

🔐 Autenticação JWT

Passe o token no header:

Authorization: seuToken


Sem "Bearer".

📌 Rotas da API
🔓 Rotas Públicas
➤ POST /cadastro-usuario

Cadastra novo usuário.

➤ POST /login

Retorna um token JWT.

🔒 Rotas Privadas (Token Obrigatório)
➤ GET /

Lista todas as peças.

➤ POST /cadastro

Cadastra peça.

➤ PUT /atualizar/:id

Atualiza peça.

➤ DELETE /deletar/:id

Remove peça.

➤ POST /cadastro-servicos

Cadastra serviços.

➤ GET /lista-servicos

Lista serviços.

📜 License

This project is open-source and free to use.

👨‍💻 Author

Developed by Bruno Siqueira
