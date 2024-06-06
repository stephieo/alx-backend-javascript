#!/usr/bin/node
export function getResponseFromAPI () {
  return new Promise((resolve, reject) => {
    const simCondition = true;
    const greet = 'Hello';
    if (simCondition) {
      resolve(greet);
    } else {
      reject(Error('goodbye:('));
    }
  });
}
