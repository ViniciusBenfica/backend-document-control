FROM node:20-alpine as development

WORKDIR /app

ADD ./package.json ./package.json

RUN npm install

ADD ./.env ./.env
ADD ./dist/ ./dist/
ADD ./prisma/ ./prisma/
ADD ./entrypoint.sh ./entrypoint.sh