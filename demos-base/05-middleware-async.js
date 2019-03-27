const fs = require('fs.promised');
const Koa = require('koa');
const app = new Koa();

const main = async function (ctx, next) { // fs.readFile是异步操作， main需写成async await形式
    ctx.response.type = 'html';
    ctx.response.body = await fs.readFile('./index.html', 'utf8');
};

app.use(main);
app.listen(3000);
console.log('访问主页：http://127.0.0.1:3000')