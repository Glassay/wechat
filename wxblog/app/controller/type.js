'use strict';

module.exports = app => {
  class StartController extends app.Controller {
    * add() {
      this.ctx.body = yield this.service.type.add(this.ctx.request.body);
    }
    * delete() {
      this.ctx.body = yield this.service.type.delete(this.ctx.request.body);
    }
    * update() {
      this.ctx.body = yield this.service.type.update(this.ctx.request.body);
    }
    * select() {
      this.ctx.body = yield this.service.type.select(this.ctx.request.body);
    }
  }
  return StartController;
};
