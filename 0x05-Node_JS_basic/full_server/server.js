#!/usr/bin/node
const express = require('express');
const indexRoutes = require('./routes/index')
const app = express();
const port = 1245;

app.use('/',indexRoutes);
app.use('/students',indexRoutes);
app.use('/students:major',indexRoutes);

app.listen(port, () => {
  console.log('FullServer is up!');
});

module.exports = app;