#!/usr/bin/node
// command line program that displays input

process.stdout.write('Welcome to Holberton School, what is your name? \n');

// listener for input in stdin
process.stdin.on('readable', () => {
  let user_input;
  while((user_input = process.stdin.read()) !== null) {
    process.stdout.write(`Your name is: ${user_input}`);
  }
  process.exit();
});



// process listener for the exit process
process.on('exit', () => {
  console.log('This important software is now closing');
});
