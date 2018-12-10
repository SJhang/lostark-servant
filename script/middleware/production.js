const path = require('path');
const express = require('express');

module.exports = function setup(app) {
  app.use('/', express.static(path.resolve(__dirname, '..')));

  app.get('/events', (req, res) => {
    res.send({ express: "Here are events!"})
  })
};