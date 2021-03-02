FROM node:6.10-alpine
MAINTAINER Ralstan Vaz

COPY src /home/code

WORKDIR /home/code

RUN echo 'Installing dependencies' && npm install

RUN echo 'Building App' && npm run build

CMD ["node", "app.js"]

EXPOSE 80
