const Koa = require('koa')
// 注意 require('koa-router') 返回的是函数:
const router = require('koa-router')()
const app = new Koa()

// 路由方法  get / post / put / delete / del / all
// *all 代表匹配所有，一般放在中间件的末尾
// 添加路由
router.get('/', async (ctx, next) => {
    ctx.response.body = '<h1>index page</h1>'
})
// 添加路由
router.get('/home', async (ctx, next) => {
    ctx.response.body = '<h1>HOME page</h1>'
})
// 添加路由
router.get('/404', async (ctx, next) => {
    ctx.response.body = '<h1>404 Not Found</h1>'
})

//重定向
router.redirect('/login', 'sign-in')

//动态路由
router.get('/user/:id', (ctx, next) => {
    console.log(ctx.params)
})

//命名路由
router.get('user', '/user/:id', (ctx, next) => {

})
router.url('user', 3)

//多个中间件
router.get(
    '/users/:id',
    (ctx, next) => {
        return User.findOne(ctx.params.id).then(function(user){
            ctx.user = user
            next()
        })
    },
    ctx => {
        console.log(ctx.user)
        // => {id:17, name: 'Alex'}
    })




// 调用路由中间件
app.use(router.routes())

app.listen(3000, ()=>{
    console.log('server is running at http://localhost:3000')
})