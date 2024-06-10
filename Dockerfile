FROM node:18

# Installing libvips-dev for sharp Compatibility
RUN apt-get update && apt-get install libvips-dev -y

WORKDIR /opt/

COPY package*.json ./

RUN npm install

WORKDIR /opt/app

COPY . .

EXPOSE 1337

CMD ["npm", "run", "develop"]
