<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-rodar">Como rodar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-contribuir">Como contribuir</a>&nbsp;&nbsp;&nbsp;
  </p>

<br>

## NLW Spacetime

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Nodejs](https://nodejs.org/en/) - v18.12.1
- [Npm](https://www.npmjs.com/) - 8.19.2
- [fastify](https://www.fastify.io/) - 4.17.0
- [SQLite](https://www.sqlite.org/index.html)
- [Prisma](https://www.prisma.io/docs)
- [TypeScript](https://www.typescriptlang.org/)

## 💻 Projeto

Projeto desenvolvido com API em Node.js para a criação de uma cápsula do tempo.

Evento do NLW na plataforma da [Rocketseat](https://www.rocketseat.com.br/).

- [Frontend Nextjs - Web](https://github.com/leticea/nlw-spacetime-web)
- [Frontend React Native - Mobile](https://github.com/leticea/nlw-spacetime-mobile)

## 🚀 Como Rodar

- Clone o projeto.
- Entre na pasta do projeto e rode 'npm install' (use 'yarn install' se for essa a sua configuração).
- npx prisma migrate dev (para configurar o banco de dados).
- npx prisma studio (para rodar a página do banco de dados).
- npm run dev (roda o servidor na porta localhost:3333).

## 👩🏿‍💻 Rotas

- **`GET http://localhost:3333/memories`**: Rota para mostrar as memórias:

Retorna:
<p align="center">
  <img alt="" src=".github/image.png">
</p>


## 🤔 Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

## 📝 Licença

Esse projeto está sob a licença MIT.