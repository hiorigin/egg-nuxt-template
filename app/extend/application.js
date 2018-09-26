const { Nuxt } = require('nuxt')
const NUXT = Symbol('APP#nuxt')
const config = require(`${process.cwd()}/nuxt.config.js`)

module.exports = {
  get nuxt() {
    if (!this[NUXT]) {
      this[NUXT] = new Nuxt(config)
    }
    return this[NUXT]
  }
}
