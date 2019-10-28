# Use Node v12-slim as the base image.
FROM node:12-slim

# create working dir
WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

RUN npm install

# copy app to dir
COPY . .

RUN npm run build

# expose port
EXPOSE 3000

# Run node
CMD ["node", "index.js"]
