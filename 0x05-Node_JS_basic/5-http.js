#!/usr/bin/node
const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');
    try {
      const results = await countStudents(process.argv[2]);
      res.write(`${results}`);
    } catch (err) {
      res.write('Cannot load the database');
    }
    res.end();
  }
});

app.listen(1245, '127.0.0.1', () => {

});

module.exports = app;
