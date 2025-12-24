# Dockerfile para mobile Aurora Travel
FROM node:20-alpine
WORKDIR /app
COPY package.json .
RUN npm install -g expo-cli && npm install
COPY . .
EXPOSE 8081 19000 19001 19002
CMD ["npm", "run", "start"]
