FROM node:16-slim

RUN apt-get update && apt-get install -y openssl

WORKDIR /app

COPY tsconfig.json .
COPY package.json .
COPY yarn.lock .

RUN yarn

COPY . .

ENV NODE_ENV="production"


RUN yarn build

CMD ["yarn", "start"]