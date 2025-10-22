FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Usa el modo desarrollo con autoreload (opcional)
CMD ["npm", "run", "start:dev"]
