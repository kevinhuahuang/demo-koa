const router = require('koa-router')()

router.prefix('/B')

router.get('/all', (ctx, next) => {
  ctx.body = 'This is B module router'
})

module.exports = router
