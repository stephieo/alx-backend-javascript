#!/usr/bin/node
const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const results = await countStudents(process.argv[2]);
    res.send(['This is the list of our students', results].join('\n'));
  } catch (err) {
    res.status(500).send('This is the list of our students\nCannot load database');
  }
});

app.listen(port, () => {
  console.log('Server 2 is up!');
});

module.exports = app;
