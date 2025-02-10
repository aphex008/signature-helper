FROM node:latest

# Upgrade npm in the container
RUN npm install -g npm@latest

WORKDIR /app

