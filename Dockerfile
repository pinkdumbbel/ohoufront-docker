FROM node:14.17.4 as build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
CMD npm run build

FROM nginx
COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html