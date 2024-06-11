#!/usr/bin/node
import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((resArray) => {
      let result = '';
      result = result.concat(resArray[0].body, ' ', resArray[1].firstName, ' ', resArray[1].lastName);
      console.log(result);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}

// import { uploadPhoto, createUser } from './utils.js';

// export default function handleProfileSignup() {
//   return Promise.all([
//     uploadPhoto(),
//     createUser(),
//   ]).then((messages) => {
//     console.log(`${messages[0].body} ${messages[1].firstName} ${messages[1].lastName}`);
//   }).catch(() => {
//     console.log('Signup system offline');
//   });
// }