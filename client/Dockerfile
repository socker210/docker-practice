FROM node:12.7.0-alpine

RUN mkdir -p /app/client
WORKDIR /app/client

COPY . /app/client

RUN yarn install

CMD ["yarn", "run", "build"]