// 本质上，表单就是 POST 方法发送到服务器的键值对。
// koa-body模块可以用来从 POST 请求的数据体里面提取键值对
const Koa = require('koa');
const koaBody = require('koa-body');
const app = new Koa();

const main = async function(ctx) {
    const body = ctx.request.body;
    if (!body.name) ctx.throw(400, '.name required');
    ctx.body = { name: body.name };
};

app.use(koaBody());
app.use(main);
app.listen(3000);
console.log('访问主页：http://127.0.0.1:3000')
/*
打开另一个命令行窗口，运行下面的命令。

$ curl -X POST --data "name=Jack" 127.0.0.1:3000
{"name":"Jack"}

$ curl -X POST --data "name" 127.0.0.1:3000
name required
* */