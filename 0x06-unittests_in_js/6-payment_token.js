#!/usr/bin/node

function getpaymentTokenFromAPI(success) {
  if (success) {
    return new Promise ((resolve) => {
     resolve({data: 'Successful response from the API' });
    })
  }
}

module.exports = getpaymentTokenFromAPI;
