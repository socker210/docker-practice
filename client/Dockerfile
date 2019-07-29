FROM node:12.7.0-alpine

RUN mkdir -p /app/client
WORKDIR /app/client

COPY ./.babelrc /app/client
COPY ./App.jsx /app/client
COPY ./webpack.config.js /app/client