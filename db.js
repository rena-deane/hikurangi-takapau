var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: __dirname + '/dev.sqlite3'
  },
  useNullAsDefault: true
})

module.exports = () => {
    getAll: () => {
        knex.select('*').table('carvings')
    }
}