'use strict';
// const knex = require('knex')({
//   client: 'mysql',
// });

module.exports = app => {
  class Article extends app.Service {
    * update(single_type) {
      try {
        yield app.mysql.update('article', single_type);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * select(article_type) {
      let res;
      try {
        res = yield app.mysql.select('article', {
          where: { type: article_type.type },
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
