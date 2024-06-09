#!/usr/bin/node
export default function getFullResponseFromAPI(success) {
  if (true) {
    resolve({
      status: 200,
      body: 'sucess',
    });
  } else {
    reject(Error('The fake API is not working currently'));
  }
}
