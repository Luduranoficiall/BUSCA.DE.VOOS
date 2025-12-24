# Dockerfile para backend Aurora Travel
FROM node:20-alpine
WORKDIR /app
COPY package.json .
RUN npm install -g @nestjs/cli && npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start:dev"]
