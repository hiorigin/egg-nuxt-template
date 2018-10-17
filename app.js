/* eslint-disable no-console */
module.exports = app => {
  const isDev = app.config.env === 'local'

  if (isDev) {
    const { Builder } = require('nuxt')
    const nuxtBuilder = new Builder(app.nuxt)
    nuxtBuilder.build().then(() => {
      console.log('[nuxt] Build Success.')
    }).catch(err => {
      console.log('[nuxt] Building Error:')
      console.log(err)
      process.exit(1)
    })
  }
}
