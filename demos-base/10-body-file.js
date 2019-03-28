const os = require('os');
const path = require('path');
const Koa = require('koa');
const fs = require('fs');
const koaBody = require('koa-body');

const app = new Koa();

const main = async function(ctx) {
    const tmpdir = os.tmpdir();
    const filePaths = [];
    const files = ctx.request.body.files || {};

    for (let key in files) {
        const file = files[key];
        const filePath = path.join(tmpdir, file.name);
        const reader = fs.createReadStream(file.path);
        const writer = fs.createWriteStream(filePath);
        reader.pipe(writer);
        filePaths.push(filePath);
    }

    ctx.body = filePaths;
};

app.use(koaBody({ multipart: true }));
app.use(main);
app.listen(3000);
console.log('访问主页：http://127.0.0.1:3000')
/*
* 运行这个 demo。

$ node demos/21.js
打开另一个命令行窗口，运行下面的命令，上传一个文件。注意，/path/to/file要更换为真实的文件路径。

$ curl --form upload=@/path/to/file http://127.0.0.1:3000
["/tmp/file"]
* */