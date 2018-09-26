module.exports = app => {
  app.router.get('/api/topics', 'topic.list')
}