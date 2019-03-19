/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1551815428801_8914';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    
    // 这个是测试号版本
    app_id:'wxcfda2ef8d793849e',
    app_secret:'8555ef66610f048dfa6bad664cfb8f9f'
  };

  // sequelize 配置
  config.sequelize = {
    dialect: 'mysql',
    database: 'trading_center',
    host: '127.0.0.1',
    port: 3306,
    username:'root',
    password:'zekun',
    // 时区，sequelize有很多自动时间的方法，都是和时区相关的，记得设置成东8区（+08:00）
    timezone: '+08:00',
  };

// 生产环境关闭csrf方便RESTFUL接口测试
  config.security = {
    csrf: {
      enable: false,
    },
  }

  return {
    ...config,
    ...userConfig,
  };
};


