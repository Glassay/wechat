'use strict';

module.exports = app => {
  class Type extends app.Service {
    * add(a) {
      try {
        yield app.mysql.insert('type', a);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * delete(a) {
      try {
        yield app.mysql.delete('type', a);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * update(a) {
      try {
        yield app.mysql.update('type', a);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * select(req) {
      let res;
      try {
        res = yield app.mysql.select('type', req);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
  }
  return Type;
};
