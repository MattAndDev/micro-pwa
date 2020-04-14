FROM node:12 AS build

WORKDIR /app

COPY . .
RUN npm i
RUN npm run build

FROM node:alpine

WORKDIR /app
COPY --from=build /app/public/ /app/public
COPY --from=build /app/private/ /app/private
ENTRYPOINT ["node", "/app/private/js/index.js"]
