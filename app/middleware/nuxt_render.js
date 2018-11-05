module.exports = (options, app) => {
  return async (ctx, next) => {
    await next()
    if (app.router.stack.some(el => ctx.path === el.path)) return
    const { res, req } = ctx
    ctx.status = 200

    return new Promise((resolve, reject) => {
      res.on('close', resolve)
      res.on('finish', resolve)
      app.nuxt.render(req, res, promise => {
        promise.then(resolve).catch(reject)
      })
    })
  }
}
