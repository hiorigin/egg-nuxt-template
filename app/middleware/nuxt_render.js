module.exports = (options, app) => {
  return async (ctx, next) => {
    await next()

    const isApi = app.router.stack.some(el => ctx.path === el.path)
    if (isApi) return

    const { res, req, body } = ctx
    ctx.status = 200
    res.data = body
    return new Promise((resolve, reject) => {
      res.on('close', resolve)
      res.on('finish', resolve)
      app.nuxt.render(req, res, promise => {
        promise.then(resolve).catch(reject)
      })
    })
  }
}
