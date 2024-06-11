#!/usr/bin/node
import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  let result = '';
  uploadPhoto()
    .then((data) => {
      result = result.concat(data.body);
      return createUser();
    }).then((data2) => {
      result = result.concat(' ', data2.firstName, ' ', data2.lastName);
      console.log(`${result}`);
    });
}
