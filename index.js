const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello new World 3');
})

module.exports = app;
