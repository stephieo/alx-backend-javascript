#!/usr/bin/node
/* eslint-disable */
import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
  .then((settledArray) => {
    console.log(settledArray);
    const resultList = [];
    settledArray.forEach((arrayItem) => {
      resultList.push({
        status: arrayItem.status,
        value: arrayItem.status == 'rejected' ? `Error: ${fileName} cannot be processed` : arrayItem.value,
      })
      // resultList.push(arrayItem.status)
      // if (arrayItem.status == 'rejected') {
      //   resultList.push(`Error: ${fileName} cannot be processed`)
      //   } else {
      //     resultList.push(arrayItem.value);
      //   }
        })
        console.log(resultList);
  return resultList;
  });
}
