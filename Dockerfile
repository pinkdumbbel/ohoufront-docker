FROM node:14.17.4-alpine as build
WORKDIR /app/ohou-frontend
COPY package.json .
RUN npm install
COPY . .
CMD npm run build

FROM nginx
COPY nginx.conf /etc/nginx/conf.d/
COPY --from=build /app/ohou-frontend/build /usr/share/nginx/html
RUN mv /etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf.back