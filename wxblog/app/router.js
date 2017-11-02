'use strict';

module.exports = app => {
  app.post('/add', 'type.add');
  app.post('/delete', 'type.delete');
  app.post('/update', 'type.update');
  app.post('/select', 'type.select');
  app.post('/add1', 'article.add');
  app.post('/delete1', 'article.delete');
  app.post('/update1', 'article.update');
  app.post('/select1', 'article.select');
};
