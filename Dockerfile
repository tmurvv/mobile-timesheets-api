FROM node:lts-bullseye-slim

WORKDIR /app

ONBUILD COPY package.json .

ONBUILD RUN npm install

ONBUILD COPY ./build .

CMD node server.js