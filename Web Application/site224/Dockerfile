FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install -g npm@8.19.3

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]
