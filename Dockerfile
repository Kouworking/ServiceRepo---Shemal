FROM node

RUN mkdir -p /src/app

WORKDIR /src/app

COPY package.json /src/app

RUN npm install

COPY . /src/app

EXPOSE 2729

CMD "node" "server/index.js"