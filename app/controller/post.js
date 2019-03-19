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
      if_bargain,
      teacher,
      open_id
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
      if_bargain,
      teacher,
      open_id
    });
    ctx.status = 201;
    ctx.body = ClassInfo;
  }
  async onLogin() {
    const app = this.app;
    const ctx = this.ctx;
    var js_code = ctx.request.body.code
    var result = await ctx.curl(`https://api.weixin.qq.com/sns/jscode2session?appid=${app.config.app_id}&secret=${app.config.app_secret}&js_code=${js_code}&grant_type=authorization_code`, {
      dataType: 'json',
      timeout: 5000,
    })
    ctx.body = {
      open_id: result.data.openid ? result.data.openid : null,
      code: result.data.errcode ? result.data.errcode : 200,
      smg: result.data.errmsg ? result.data.errmsg : 'success'
    }
    ctx.status = 201;
  }

  async searchInfoByOpenId() {
    const app = this.app;
    const ctx = this.ctx;
    const open_id = ctx.request.body.open_id;
    ctx.body = await ctx.model.ClassInfo.findAll({
      where: {
        open_id: open_id
      }
    });
  }

  async delete() {
    const app = this.app;
    const ctx = this.ctx;
    const id = ctx.request.body.id;
    ctx.body = await ctx.model.ClassInfo.destroy({
      where: {
        id: id
      }
    })
  }
}

module.exports = PostController;