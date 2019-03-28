const Koa = require('koa');
const app = new Koa();

const main = function(ctx) {
    const n = Number(ctx.cookies.get('view') || 0) + 1;
    ctx.cookies.set('view', n);
    ctx.response.body = n + ' views';
}

app.use(main);
app.listen(3000);
console.log('访问主页：http://127.0.0.1:3000')
console.log('显示1 views 刷新一次页面，就变成了2 views。再刷新，每次都会计数增加')