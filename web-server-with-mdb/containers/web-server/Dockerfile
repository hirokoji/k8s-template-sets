FROM node:14.4-slim
LABEL maintener="hirokoji <hirokoji.jp@gmail.com>"
WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y \
    curl \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

COPY package*.json ./
COPY dist ./

RUN npm install
EXPOSE 8080
CMD [ "node", "index.js" ]
