#!/usr/bin/node
const fs = require('fs');

function countStudents(path) {
  try {
    const contents = fs.readFileSync(path, 'utf-8');
    if (!contents) {
      console.log('Cannot load the database');
      return;
    }
    // seperate entries and remove headers
    const entries = contents.split('\n');
    entries.shift();

    // collect length data and number of students per course
    const numberOfStudents = entries.length;
    console.log(`Number of students: ${numberOfStudents}`);

    let csStudents = 0;
    const csArray = [];
    let sweStudents = 0;
    const sweArray = [];
    entries.forEach((entry) => {
      if (entry.includes('CS')) {
        csStudents += 1;
        csArray.push(entry.split(',')[0]);
      } else if (entry.includes('SWE')) {
        sweStudents += 1;
        entry.split(',');
        sweArray.push(entry.split(',')[0]);
      }
    });
    console.log(`Number of students in CS: ${csStudents}. List: ${csArray.join(', ')}`);
    console.log(`Number of students in SWE: ${sweStudents}. List: ${sweArray.join(', ')}`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
