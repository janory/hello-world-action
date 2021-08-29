FROM node:15.10.0-buster-slim

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci

COPY protos protos/
COPY index.js .

RUN npm run build

RUN npm prune --production

USER node

EXPOSE 8080
CMD ["npm", "start"]