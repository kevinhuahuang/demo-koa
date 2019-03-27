const Koa = require('koa');
const compose = require('koa-compose'); // koa-compose模块可以将多个中间件合成为一个
const app = new Koa();

const logger = (ctx, next) => {
    console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
    next();
}

const main = ctx => {
    ctx.response.body = 'Hello World koa-compose';
};

const middlewares = compose([logger, main]); // 将两个中间件合成一个

app.use(middlewares);
app.listen(3000);
console.log('访问主页：http://127.0.0.1:3000')