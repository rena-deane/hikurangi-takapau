var config = require('../knexfile.js');
var env = 'development';
var knex = require('knex')(config[env]);


function getAll (table, callback) {
  knex.select().from(table)
    .then(function(resp) {
      callback(null, resp)
    })
    .catch(function(err){
      callback(err, null)
    })
}

module.exports = {
  getAll: getAll
}

    // findOne: function(table, params, callback) {
    //   knex(table).where(params)
    //     .then(function(resp){
    //       callback(null, resp[0])
    //     })
    //     .catch(function(err){
    //       callback(err, null)
    //     })
    // },

    // add: function(table, obj, callback) {
    //   knex(table).returning('id').insert(obj)
    //     .then(function(resp) {
    //       callback(null, resp[0])
    //     })
    //     .catch(function(err) {
    //       callback(err, null)
    //     })
    // },

    // delete: function(table, params, callback) {
    //   knex(table).where(params).del()
    //     .then(function(resp){
    //       callback(null, resp)
    //     })
    //     .catch(function(err){
    //       callback(err, resp)
    //     })
    // },

    // update: function(table, searchParams, updateInfo, callback) {
    //   knex(table).where(searchParams).update(updateInfo, 'id')
    //     .then(function(resp) {
    //       callback(null, resp[0])
    //     })
    //     .catch(function(err){
    //       callback(err, resp)
    //     })
    // }
