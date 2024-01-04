<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-rodar">Como rodar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-contribuir">Como contribuir</a>&nbsp;&nbsp;&nbsp;
</p>

<br>

# NLW Spacetime

<p align="center">
  <img alt="" src=".github/wallpaper.png">
</p>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Nodejs](https://nodejs.org/en/) - v18.12.1
- [Npm](https://www.npmjs.com/) - 8.19.2
- [Axios](https://www.npmjs.com/package/axios) - 1.4.0
- [Fastify](https://www.fastify.io/) - 4.17.0
- [TypeScript](https://www.typescriptlang.org/) - 5.0.4
- [SQLite](https://www.sqlite.org/index.html)
- [Prisma](https://www.prisma.io/docs) - 4.14.1
- [Zod](https://zod.dev/) - 3.21.4

## 💻 Projeto

Projeto desenvolvido com API em Node.js para a criação de uma cápsula do tempo.

Evento do NLW na plataforma da [Rocketseat](https://www.rocketseat.com.br/).

- [Front-end - Web](https://github.com/leticea/nlw-spacetime-web)
- [Front-end - Mobile](https://github.com/leticea/nlw-spacetime-mobile)

## 🚀 Como Rodar

- Clone o projeto.
- Entre na pasta do projeto e rode 'npm install' (use 'yarn install' se for essa a sua configuração).
- npx prisma migrate dev (para configurar o banco de dados).
- npx prisma studio (para rodar a página do banco de dados).
- npm run dev (roda o servidor na porta localhost:3333).

## 👩🏿‍💻 Rotas de Autenticação das Memórias

- **`POST http://localhost:3333/memories`**: Rota para criar uma memória:

Envia:

<p align="center">
  <img alt="" src=".github/image.png">
</p>

- **`GET http://localhost:3333/memories`**: Rota para listar as memórias:

Retorna:

<p align="center">
  <img alt="" src=".github/image2.png">
</p>

- **`GET http://localhost:3333/memories/:id`**: Rota para detalhar uma memória:

Retorna:

<p align="center">
  <img alt="" src=".github/image3.png">
</p>

- **`PUT http://localhost:3333/memories/:id`**: Rota para atualizar uma memória:

Envia:

<p align="center">
  <img alt="" src=".github/image4.png">
</p>

- **`DELETE http://localhost:3333/memories/:id`**: Rota para deletar uma memória.

## 👩🏿‍💻 Rota de Registro

- **`POST http://localhost:3333/register`**: Rota que cria o usuário no Banco de Dados:

Envia:

<p align="center">
  <img alt="" src=".github/image5.png">
</p>

## 🤔 Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

## 📝 Licença

Esse projeto está sob a licença MIT.
