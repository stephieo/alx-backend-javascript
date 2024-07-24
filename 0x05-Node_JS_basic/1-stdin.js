#!/usr/bin/node
// command line program that displays input

process.stdout.write('Welcome to Holberton School, what is your name? \n');

// listener for input in stdin
process.stdin.on('data', (data) => {
  process.stdout.write(`Your name is ${data}`);
  // exit program
  process.exit();
});

// process listener for the exit process
process.on('exit', () => {
  console.log('This important software is now closing');
});
