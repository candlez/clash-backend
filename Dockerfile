FROM node:20.11-alpine

ENV PORT=443

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE $PORT

CMD [ "node", "index.cjs" ]