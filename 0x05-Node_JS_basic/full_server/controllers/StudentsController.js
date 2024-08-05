#!/usr/bin/node
const readDatabase = require('../utils');

class StudentsController {
  // these will serve as callbacks

  static getAllStudents (request, response) {
    readDatabase(process.argv[2]).then((students) =>{
      // constructing the output
      output = [] // array of output lines
      output.push('This is the list of out students');
      Object.keys(students).forEach(field => {
        output.push(`Number of students in students in ${field}: ${students[keys].length}. List: students[keys]`);
      });
      response.status(200).send(output.join('\n'));
    }).catch((err) => {
      response.status(500).send('Cannot load the database');
    });
  }
  
  static getAllStudentsByMajor (request, response) {
    const field = request.query.major;
    if (field !== 'CS' || 'SWE') {
      readDatabase(process.argv[2]).then((students) =>{
        output = [] // array of output lines
        output.push(`List: students[field].join('\n')`)
        response.status(200).send(output);
      }
    } else {
      response.status(500).send('Major parameter must be CS OR SWE');
    }
    response.status(200).send();
  }
}

module.exports = StudentsController;
