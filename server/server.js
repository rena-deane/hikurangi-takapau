const express = require('express');
const path = require('path');

const api = require('./routes/api')

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.use('/api', api)

const server = app.listen(process.env.PORT || 4000, () =>  {
  console.log(`Server ready on port ${server.address().port}`);
});

