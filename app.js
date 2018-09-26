module.exports = app => {
  const isDev = app.config.env === 'local'

  if (isDev) {
    const { Builder } = require('nuxt')
    const nuxtBuilder = new Builder(app.nuxt)
    nuxtBuilder.build().then(_ => {
      console.log('[nuxt] Build Success.')        // eslint-disable-line no-console
    }).catch(err => {
      console.log('[nuxt] Building Error:')       // eslint-disable-line no-console
      console.log(err)                            // eslint-disable-line no-console
      process.exit(1)
    })
  }
}
