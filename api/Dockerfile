FROM node:16.10-alpine3.13
WORKDIR /app
EXPOSE 3000 8888
COPY . .
RUN npm ci
CMD ["npm", "start"]
