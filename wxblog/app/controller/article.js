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
      this.ctx.body = yield this.service.article.update(this.ctx.request.body);
    }
    * select() {
      console.log(this.ctx.request.body);
      this.ctx.body = yield this.service.article.select(this.ctx.request.body);
    }
  }
  return StartController;
};
