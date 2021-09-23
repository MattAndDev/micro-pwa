# micro-pwa

Simple custom setup to develop isomorphic progressive web apps

## features

- small
- isomorphic
- typed
- extendible
- css modules

## details

Setup for isomorphic preact application, written in typescript, styled with css-modules, bundled with webpack.

Provides dev environment with hot module replacement.

## how to

deps:
`npm i`

start dev server (with hot module replacement):
`npm start`

bundle for production:
`npm run bundle` then run it `node app/server/index.js`

dockerize:
`docker build -t micro-pwa .` then run it `docker run -p 4242:4242 -d micro-pwa`
