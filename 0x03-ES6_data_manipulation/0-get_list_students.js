#!/usr/bin/node
export default function getListStudents() {
  let objArray = [];
  objArray[0] = new Student(1, 'Guillaume', 'San Francisco')
  objArray[1] = new Student(2, 'James', 'Columbia')
  objArray[2] = new Student(5, 'Serena', 'San Francisco')
  return objArray;
}

export function Student(id, firstName, location){
  this.id = id;
  this.firstName = firstName;
  this.location = location;
}