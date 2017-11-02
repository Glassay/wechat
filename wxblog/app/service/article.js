'use strict';
const knex = require('knex')({
  client: 'mysql',
});

module.exports = app => {
  class Article extends app.Service {
    * add(a) {
      try {
        yield app.mysql.insert('article', a);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * delete(a) {
      try {
        yield app.mysql.delete('article', a);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * update(a) {
      try {
        yield app.mysql.update('article', a);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * select(a) {
      let res;
      try {
        res = yield app.mysql.select('article', {
          where: { type: a.type },
        });
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
  }
  return Article;
};
