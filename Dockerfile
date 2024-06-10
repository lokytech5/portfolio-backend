FROM node:18

# Installing libvips-dev for sharp Compatibility
RUN apt-get update && apt-get install libvips-dev -y

WORKDIR /opt/

COPY package*.json ./

ENV NODE_OPTIONS=--max_old_space_size=2048

RUN npm install

WORKDIR /opt/app

COPY . .

COPY .env .env

EXPOSE 1337

CMD ["npm", "run", "develop"]
