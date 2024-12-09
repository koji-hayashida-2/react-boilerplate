FROM node:20-slim

WORKDIR /app
RUN apt-get update && apt-get install -y xdg-utils
COPY package.json package-lock.json ./
RUN npm install
COPY . .
EXPOSE 5173 6006