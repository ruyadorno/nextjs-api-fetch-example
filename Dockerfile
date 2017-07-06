FROM node:alpine

COPY . /ad-mobile-storefront

WORKDIR /ad-mobile-storefront

RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]

