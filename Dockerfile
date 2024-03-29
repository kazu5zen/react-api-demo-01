FROM node:16.16.0-alpine3.16
ENV NODE_VERSION 16.16.0
WORKDIR /front
COPY ./front /front
EXPOSE 3000
ENV CI=true