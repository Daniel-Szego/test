FROM node:10
USER root
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD npm run serve
EXPOSE 8080