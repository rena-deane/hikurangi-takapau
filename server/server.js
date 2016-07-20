const express = require('express');
const path = require('path');
const knex = require('./knexfile.js').db
const db = require('./database/database')(knex)

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

const server = app.listen(process.env.PORT || 3000, () =>  {
  console.log(`Server ready on port ${server.address().port}`);
});

app.get('/', function(req, res) {
  res.send('hello world')
});