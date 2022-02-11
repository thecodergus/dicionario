FROM node:16

RUN npm i -g -y serve

COPY ./src /usr/app

WORKDIR /usr/app

RUN npm i

RUN npm run build

EXPOSE 3000

ENTRYPOINT ["serve", "-s", "build"]