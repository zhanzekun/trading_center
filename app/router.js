'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/classes_info', controller.get.index);
  router.get('/class_info/:id',controller.get.findOne);
  router.post('/upload_class', controller.post.create);
};