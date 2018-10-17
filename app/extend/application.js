const { Nuxt } = require('nuxt')
const NUXT = Symbol('APP#nuxt')
const config = require(`${process.cwd()}/nuxt.config.js`)
const nuxt = new Nuxt(config)

module.exports = {
  get nuxt() {
    if (!this[NUXT]) {
      this[NUXT] = nuxt
    }
    return this[NUXT]
  },
}
