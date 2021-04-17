FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY ./src .

EXPOSE 3000

RUN npm run build

CMD ./scripts/start.sh