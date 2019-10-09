FROM node:alpine as build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

FROM node:alpine
EXPOSE 3001
WORKDIR /usr/src/app
COPY --from=build node_modules .
COPY . .
ENTRYPOINT [ "node", "index.js" ]