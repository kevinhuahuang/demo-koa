//为了方便处理错误，最好使用try...catch将其捕获。
// 但是，为每个中间件都写try...catch太麻烦，我们可以让最外层的中间件，负责所有中间件的错误处理。
const Koa = require('koa')
const route = require('koa-route');
const app = new Koa()

const handler = async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        ctx.response.status = err.statusCode || err.status || 500;
        ctx.response.body = {
            message: err.message
        }
        ctx.app.emit('error', err, ctx) //手动释放error事件
    }
};

const error500 = ctx => {
    ctx.throw(500) // 500错误页"Internal Server Error"
};

const error404 = ctx => {
    ctx.response.status = 404;
    ctx.response.body = 'Page Not Found';
};

const main = ctx => {
    ctx.throw(500);
}

app.use(handler)
app.use(main)
app.use(route.get('/error500', error500));
app.use(route.get('/error404',error404));

app.on('error', (err, ctx) =>  // error 事件监听
    console.error('server error', err)
)

app.listen(3000)
console.log('访问主页：http://127.0.0.1:3000')
console.log('访问重定向页：http://127.0.0.1:3000/error500')
console.log('访问非重定向页：http://127.0.0.1:3000/error404')
