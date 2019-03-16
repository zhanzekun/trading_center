'use strict';

const Controller = require('egg').Controller;

class PostController extends Controller {
  async create() {
    const ctx = this.ctx;
    const { 
      date,
      dance_type,
      university,
      begin_time,
      end_time,
      wechat_or_number,
      address,
      tips,
      price,
      if_bargain
     } = ctx.request.body;
    const ClassInfo = await ctx.model.ClassInfo.create({ 
      date,
      dance_type,
      university,
      begin_time,
      end_time,
      wechat_or_number,
      address,
      tips,
      price,
      if_bargain
     });
    ctx.status = 201;
    ctx.body = ClassInfo;
  }
}

module.exports = PostController;
