FROM node:12.7.0-alpine

RUN mkdir -p /app/server
WORKDIR /app/server

EXPOSE 3001

COPY . /app/server

RUN yarn install

CMD ["yarn", "run", "start"]`