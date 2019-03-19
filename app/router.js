'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/classes_info', controller.get.index);
  router.get('/class_info/:id',controller.get.findOne);
  router.post('/on_login',controller.post.onLogin)
  router.post('/upload_class', controller.post.create);
  router.post('/classes_info_by_openid',controller.post.searchInfoByOpenId)
  router.post('/delete_class',controller.post.delete)
};