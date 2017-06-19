'use strict'

const express = require('express');
const app = express();
const li = require('lorem-ipsum');

app.get('/lorem/*', function(req, res) {
  let num = parseInt(req.params[0]) || 3;
  res.send(li({count: num, units: 'paragraphs', format: 'html'}));
});

app.listen(3000, function () {
  console.log("Express server started");
});
