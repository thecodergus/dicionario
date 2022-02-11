# Dicionario

## O que é?
É uma interface de dicionario animado criado com ReactJS junto a um ambiente Docker. Todo seu conteudo exibido é gerado por via de scraping ao website [dicio.com.br](dicio.com.br).

## O que ele faz?
- Faz scrap das palavras pesquisadas diretamente de [dicio.com.br](https://dicio.com.br/)
- Exibe as pesquisas em tela de forma animada

## O que compõe o Projeto?
1. [TypeScript](https://www.typescriptlang.org/)
2. [ReactJS](https://pt-br.reactjs.org/)
3. [Ant Design](https://ant.design/)
4. [axios](https://axios-http.com/ptbr/docs/intro)
5. [React Router](https://reactrouter.com/)
6. [yarn](https://yarnpkg.com/)
7. [Framer](https://www.framer.com/)
8. [Docker](https://www.docker.com/)
9. [Docker Compose](https://docs.docker.com/compose/)

## Como instalar?
- Com Docker e projeto buildado
1. ```git clone https://github.com/gusscamargo/dicionario```
2. ``` cd dicionario```
3. ```docker-compose build```
4. ```docker-compose up -d```
5. ```Espere carregar```
6. Acesse [127.0.0.1](http://127.0.0.1/)

- Sem Docker e projeto não buildado
1. ```git clone https://github.com/gusscamargo/dicionario```
2. ``` cd dicionario```
3. ```cd src```
4. ```npm install``` ou ```yarn install```
5. ```npm start``` ou ```yarn start```
6. Espere carregar a compilação
7. Acesse [127.0.0.1:3000](http://127.0.0.1:3000/)

## Como usar:
1. Digite a palavra e aperte enter ou clique no botão.
2. Espere.


![GIF](https://i.imgur.com/wTjBxkg.gif)
