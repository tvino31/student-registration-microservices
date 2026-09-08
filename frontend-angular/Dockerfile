FROM node:18-alpine AS build
WORKDIR /app
COPY package.json ./
RUN npm install --silent
COPY . ./
EXPOSE 4200
CMD ["npm","start"]
