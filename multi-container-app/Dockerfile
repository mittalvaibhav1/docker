# Select Base Image
FROM node:alpine

# Intermediate Steps
WORKDIR /usr/apps/multi-container-app

COPY ./package.json ./
RUN npm install
COPY ./ ./

# Startup Command
CMD ["npm", "start"]