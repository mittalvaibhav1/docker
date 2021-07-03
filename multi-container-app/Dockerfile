# Specify Base Image
FROM node:alpine

# Intermediary Steps
WORKDIR /app/multi-container-app

COPY ./package.json ./
RUN npm install

COPY ./ ./

# Startup Command
CMD ["npm", "start"]