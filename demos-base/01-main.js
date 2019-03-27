const Koa = require('koa')
const fs = require('fs')
const app = new Koa()

const main = ctx => {
    if (ctx.request.accepts('xml')) {
        ctx.response.type = 'xml'
        ctx.response.body = '<data>Hello World</data>'
    }  else if (ctx.request.accepts('json')) {
        ctx.response.type = 'json'
        ctx.response.body = { data: 'Hello World' };
    } else if (ctx.request.accepts('html')) {
        ctx.response.type = 'html';
        ctx.response.body = fs.createReadStream('./index.html')
    } else {
        ctx.response.type = 'text';
        ctx.response.body = 'Hello World';
    }
}

app.use(main)
app.listen(3000)
console.log('访问：http://127.0.0.1:3000')