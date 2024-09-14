FROM node:16-alpine

# Установим рабочую директорию
WORKDIR /app

# Копируем файлы package.json и package-lock.json в рабочую директорию
COPY package*.json ./

# Установим зависимости
RUN npm install

# Копируем все файлы приложения в рабочую директорию
COPY . .

# Соберем приложение
RUN npm run build

# порт 3000
EXPOSE 3000

# Запустим приложение
CMD ["npm", "run", "start:prod"]