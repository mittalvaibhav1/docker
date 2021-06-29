# Base Image
FROM node:alpine

# Work Directory
WORKDIR /usr/apps/hello-world-app

# Installations and Configuration
COPY ./package.json ./
RUN npm install
COPY ./ ./

# Startup Command
CMD ["npm", "start"]
