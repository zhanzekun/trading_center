'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE, TIME, FLOAT, BOOLEAN } = app.Sequelize;

  const class_info = app.model.define('class_info', {
    id: { type: INTEGER, primaryKey: true, allowNull: false, autoIncrement: true },
    dance_type:STRING(255),
    // 这里怎么表达我是保存一个时间啊？还是用DATE?
    date:DATE,
    begin_time: TIME(),
    end_time:TIME(),
    price:FLOAT(),
    if_bargain:BOOLEAN,
    wechat_or_number:STRING(255),
    university:STRING(255),
    address:STRING(255),
    tips:STRING(255),
    created_at: DATE,
    updated_at: DATE,
    teacher:STRING(255),
    open_id:STRING(255),
  });

  return class_info;
};