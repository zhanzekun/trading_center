'use strict';

const Controller = require('egg').Controller;

class GetController extends Controller {
  async index() {
    const { ctx } = this;
    // egg-sequlize会默认首字母大写，将下划线自动变形为驼峰命名
    ctx.body = await ctx.model.ClassInfo.findAll();
  }

  async findOne() {
    const { ctx } = this;
    let id = ctx.params.id;
    ctx.body = await ctx.model.ClassInfo.findOne({
      where:{
        id: id
      }
    });
  }
}

module.exports = GetController;
