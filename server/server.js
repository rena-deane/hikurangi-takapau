const express = require('express');
const path = require('path');
const db = require('./database/utils')

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

const server = app.listen(process.env.PORT || 4000, () =>  {
  console.log(`Server ready on port ${server.address().port}`);
});

app.get('/api/v1', (req, res) => {
  db.getAll('carvings', (err, data) => {
    if (err) {
      console.error(err)
    } else {
      res.send(data)
    }
  })
});