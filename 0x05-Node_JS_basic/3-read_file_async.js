#!/usr/bin/node
const fs = require('fs');

function countStudents(path) {
  // LEARN: ASYNC/AWAIT  or TRY/CATCH APPROACH
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
      }
      try {
        // seperate entries and remove headers
        const entries = data.split('\n');
        entries.shift();

        // collect length data
        const numberOfStudents = entries.length;
        // console.log(`Number of students: ${numberOfStudents}`);
        const result = [];
        result.push(`Number of students: ${numberOfStudents}`)

        // collate and number of students per course
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
        // console.log(`Number of students in CS: ${csStudents}. List: ${csArray.join(', ')}`);
        // console.log(`Number of students in SWE: ${sweStudents}. List: ${sweArray.join(', ')}`);

        result.push(`Number of students in CS: ${csStudents}. List: ${csArray.join(', ')}`);
        result.push(`Number of students in SWE: ${sweStudents}. List: ${sweArray.join(', ')}`);
        resolve(result.join('\n'));
      } catch (err) {
        reject(Error('Cannot load the database'));
      }
    });
  });
}

module.exports = countStudents;
// LEARN: THEN..CATCH APPROACH
// return fs.readFile(path, 'utf-8')
//   .then((data) => {
//     // seperate entries and remove headers
//     const entries = contents.split('\n');
//     entries.shift();

//     // collect length data
//     const numberOfStudents = entries.length;
//     console.log(`Number of students: ${numberOfStudents}`);

//     // collate and number of students per course
//     let csStudents = 0;
//     const csArray = [];
//     let sweStudents = 0;
//     const sweArray = [];
//     entries.forEach((entry) => {
//       if (entry.includes('CS')) {
//         csStudents += 1;
//         csArray.push(entry.split(',')[0]);
//       } else if (entry.includes('SWE')) {
//         sweStudents += 1;
//         entry.split(',');
//         sweArray.push(entry.split(',')[0]);
//       }
//     });
//     console.log(`Number of students in CS: ${csStudents}. List: ${csArray.join(', ')}`);
//     console.log(`Number of students in SWE: ${sweStudents}. List: ${sweArray.join(', ')}`);
//   })
//   .catch(() => {
//     throw new Error('Cannot load the database');
//   });

// LEARN: THis is how i would do it im more modern node environments
// const fs = require('fs/promises');

// function countStudents(path) {
//   return fs.readFile(path, 'utf-8')
//     .then((contents) => {
//       // seperate entries and remove headers
//       const entries = contents.split('\n');
//       entries.shift();

//       // collect length data
//       const numberOfStudents = entries.length;
//       console.log(`Number of students: ${numberOfStudents}`);

//       // collate and number of students per course
//       let csStudents = 0;
//       const csArray = [];
//       let sweStudents = 0;
//       const sweArray = [];
//       entries.forEach((entry) => {
//         if (entry.includes('CS')) {
//           csStudents += 1;
//           csArray.push(entry.split(',')[0]);
//         } else if (entry.includes('SWE')) {
//           sweStudents += 1;
//           entry.split(',');
//           sweArray.push(entry.split(',')[0]);
//         }
//       });
//       console.log(`Number of students in CS: ${csStudents}. List: ${csArray.join(', ')}`);
//       console.log(`Number of students in SWE: ${sweStudents}. List: ${sweArray.join(', ')}`);
//     })
//     .catch(() => {
//       throw new Error('Cannot load the database');
//     });
// }
