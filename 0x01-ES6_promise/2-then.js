#!/usr/bin/node
function onSuccess(resValue) {
  if (resValue) {
    console.log('Got a response from the API');
  }
  return {
    status: 200,
    body: 'Success',
  };
}

function onFailure() {
  return (Error());
}

export default function handleResponseFromAPI(promise) {
  promise.then(onSuccess, onFailure)
    .then(onSuccess, onFailure)
    .then(onSuccess, onFailure);
}
