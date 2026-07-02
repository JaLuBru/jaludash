FROM node:22-alpine

WORKDIR /app

COPY package.json ./
COPY server.js ./
COPY index.html ./
COPY src ./src

ENV PORT=4173
EXPOSE 4173

CMD ["node", "server.js"]
