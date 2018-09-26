class TopicService extends require('egg').Service {
  async getTopicList() {
    const data = await this.ctx.curl('https://cnodejs.org/api/v1/topics', { dataType: 'json' })
    return data
  }
}

module.exports = TopicService
