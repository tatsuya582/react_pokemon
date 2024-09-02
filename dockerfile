FROM node:22-alpine3.19
WORKDIR /app
COPY ./pokemon-app/package.json ./pokemon-app/package-lock.json ./
WORKDIR /app/pokemon-app
RUN npm install
EXPOSE 3000

# 最初はこちらで実行 yes | npx create-react-app .はコンテナ内で手動でやる
# FROM node:22-alpine3.19
# WORKDIR /app/pokemon-app
# # RUN yes | npx create-react-app .
# EXPOSE 3000
