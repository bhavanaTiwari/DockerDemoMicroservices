FROM node:latest

COPY . /src

WORKDIR /src

RUN npm install cors
RUN npm install --production

EXPOSE 3000

CMD npm start