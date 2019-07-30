FROM node:12.7.0-alpine

RUN mkdir -p /app/client
WORKDIR /app/client

EXPOSE 3000

COPY . /app/client

RUN yarn install

CMD ["yarn", "run", "prod"]