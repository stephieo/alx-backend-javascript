#!/usr/bin/node
export default function handleResponseFromAPI(promise) {
  return promise.then(() => ({
    status: 200,
    body: 'success',
  }))
    .catch(() => new Error())
    .finally(() => return 'Got a response from the API');
}
