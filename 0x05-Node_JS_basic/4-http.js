#!/usr/bin/node
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write('Hello Holberton School!');
  res.end();
});

server.listen(1245, '127.0.0.1', () => {
  // console.log("Hello Holberton School");
});

module.exports = server;
