FROM node:10.19.0-alpine3.10
WORKDIR /app
COPY package-lock.json package.json ./
RUN npm install
COPY src ./
CMD [ "node", "index.js" ]
EXPOSE 3000
