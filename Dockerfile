FROM node:18

# Installing libvips-dev for sharp
RUN apt-get update && apt-get install libvips-dev -y

WORKDIR /opt/

COPY package*.json ./
RUN npm install

WORKDIR /opt/app
COPY . .

# Prebuild admin panel
RUN npm run build

EXPOSE 1337

CMD ["npm", "start"]
