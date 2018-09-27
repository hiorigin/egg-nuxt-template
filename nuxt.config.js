const pkg = require('./package')

module.exports = {
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'renderer', content: 'webkit' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no, viewport-fit=cover' },
      { name: 'X-UA-Compatible', content: 'IE=edge' },
      { hid: 'description', name: 'description', content: pkg.description },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  modules: [
    ['@nuxtjs/axios', { browserBaseURL: '/', port: 7001 }],
  ],
  srcDir: './nuxt/',
  loading: { color: '#3b8070' },
}
