module.exports = appInfo => ({
  keys: appInfo.name + '{{ ___KEYS___ }}',
  middleware: ['nuxtRender'],
})
