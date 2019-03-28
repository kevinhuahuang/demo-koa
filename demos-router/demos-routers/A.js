const router = require('koa-router')()

router.prefix('/A')

router.get('/all', (ctx, next) => {
  ctx.body = 'This is A module router'
})

module.exports = router
