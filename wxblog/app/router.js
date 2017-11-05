'use strict';

module.exports = app => {
  app.post('/select', 'type.select');
  app.post('/update1', 'article.update');
  app.post('/select1', 'article.select');
  app.post('/hot', 'article.hot');
};
