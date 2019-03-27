const Koa = require('koa')
const route = require('koa-route');
const app = new Koa()

const main = ctx => {
    ctx.response.body = '主页';
};

const redirect = ctx => {
    ctx.response.redirect('/'); // 重定向根目录，即main
    ctx.response.body = '<a href="/">重定向页：主页链接</a>';
};

const noredirect = ctx => {
    // ctx.response.redirect('/'); 取消重定向
    ctx.response.body = '<a href="/">重定向页：主页链接</a>';
};

app.use(route.get('/', main));
app.use(route.get('/redirect', redirect));
app.use(route.get('/noredirect',noredirect));

app.use(main);
app.listen(3000)
console.log('访问主页：http://127.0.0.1:3000/redirect')
console.log('访问重定向页：http://127.0.0.1:3000/redirect')
console.log('访问非重定向页：http://127.0.0.1:3000/noredirect')
