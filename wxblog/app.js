'use strict';

const knex = require('knex')({
  client: 'mysql',
});

module.exports = app => {
  app.beforeStart(function* () {
    // const ctx = app.createAnonymousContext();
    const hasType = yield app.mysql.query(knex.schema.hasTable('type').toString());
    if (hasType.length === 0) {
      const typeSchema = knex.schema.createTableIfNotExists('type', function(table) {
        table.increments();
        table.string('type').notNullable().defaultTo('');
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });

      yield app.mysql.query(typeSchema.toString());
      // yield ctx.helper.unique(app, 'teacher', 'name');
    }
    const hasArticle = yield app.mysql.query(knex.schema.hasTable('article').toString());
    if (hasArticle.length === 0) {
      const articleSchema = knex.schema.createTableIfNotExists('article', function(table) {
        table.increments();
        table.string('type').notNullable().defaultTo('');
        table.string('title').notNullable().defaultTo('');
        table.string('profile').notNullable().defaultTo('');
        table.string('article').notNullable().defaultTo('');
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });

      yield app.mysql.query(articleSchema.toString());
      // yield ctx.helper.unique(app, 'teacher', 'name');
    }
  });
};
