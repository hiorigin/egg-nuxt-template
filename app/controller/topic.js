class TopicController extends require('egg').Controller {
  async list(ctx) {
    const response = await ctx.service.topic.getTopicList()
    ctx.body = response.data
  }
}

module.exports = TopicController