var express = require('express');
var router = express.Router();
var knex = require('knex')

var db = require('../database/utils')

router.get('/v1', function (req, res) {
  db.getAll('carvings', function (err, data) {
    if (err) {
      console.error(err)
    } else {
      res.json(data)
    }
  })
})

module.exports = router