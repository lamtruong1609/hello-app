FROM node:23-alpine

WORKDIR /home/node/app

COPY ../package.json .
COPY ../app.js .
COPY ../server.js .
RUN /bin/sh -c "npm install"
EXPOSE 8080

USER node

CMD ["npm", "start"]