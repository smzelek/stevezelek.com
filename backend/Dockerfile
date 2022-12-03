FROM node:16-slim

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

RUN npm install
CMD npm run start:server