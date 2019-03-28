const router = require('koa-router')()

router.prefix('/C')

router.get('/all', (ctx, next) => {
  ctx.body = 'This is C module router'
})

module.exports = router
