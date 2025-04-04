# Cadastro de Usuários com autenticação

Este é um projeto CRUD básico de usuários com autenticação JWT e proteção de senhas com bcrypt. Ele foi desenvolvido com React no frontend, Node.js + Express no backend, e MongoDB com Prisma no banco de dados.

## Para rodar o Backend

Acesse a pasta do Back-End

`cd backend`

Instale as dependências

`npm install`

Crie um arquivo .env e adicione a SUA string de conexão do MongoDB e a SUA chave JWT

`DATABASE_URL="mongodb+srv://<usuario>:<senha>@cluster.mongodb.net/meuBanco?retryWrites=true&w=majority"`
`JWT_SECRET="<segredo>"`

Gere o Prisma Client

`npx prisma generate`

Inicie o servidor backend

`node --watch server.js`

## Para rodar o Frontend:

Acesse a pasta do frontend

`cd frontend`

Instale as dependências

`npm install`

Inicie o servidor frontend

`npm run dev`
