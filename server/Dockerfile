FROM node:16-alpine

WORKDIR /app

COPY server/package*.json ./

RUN npm install

COPY server/ .

CMD ["node", "app.js"]
