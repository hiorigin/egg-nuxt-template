module.exports = (options, app) => {
  return async (ctx, next) => {
    await next()

    const { res, req, body } = ctx
    ctx.status = 200
    res.data = body
    return new Promise((resolve, reject) => {
      app.nuxt.render(req, res, promise => {
        promise.then(resolve).catch(reject)
      })
    })
  }
}
