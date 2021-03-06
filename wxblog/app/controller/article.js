'use strict';

module.exports = app => {
  class StartController extends app.Controller {
    * add() {
      this.ctx.body = yield this.service.article.add(this.ctx.request.body);
    }
    * delete() {
      this.ctx.body = yield this.service.article.delete(this.ctx.request.body);
    }
    * update() {
      console.log(this.ctx.request.body, 'ssss');
      this.ctx.body = yield this.service.article.update(this.ctx.request.body);
    }
    * select() {
      console.log(this.ctx.request.body);
      this.ctx.body = yield this.service.article.select(this.ctx.request.body);
    }
    * hot() {
      this.ctx.body = yield this.service.article.hot(this.ctx.request.body);
    }
  }
  return StartController;
};
