exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('carvings', function (table) {
      table.increments('id').primary()
      table.string('name')
      table.string('description')
    })
])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('carvings')
  ])
};