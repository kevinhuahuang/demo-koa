const Koa = require('koa')
const fs = require('fs')
const path = require('path');
const serve = require('koa-static');

const app = new Koa()

const main = serve(path.join(__dirname));
app.use(main);
app.listen(3000)
console.log('访问：http://127.0.0.1:3000') // 默认是index.html
console.log('访问：http://127.0.0.1:3000/02-static.js')