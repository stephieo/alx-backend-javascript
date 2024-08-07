#!/usr/bin/node
const { describe, it } = require('mocha');
const { expect } = require('chai');
const request = require('request');

describe('test simple express app', function() {
  // start and end server after all tests
  // before(function(done) {
  //   app.listen(7865, done);
  //   });
    
  //   after(function (done) {
  //     app.close(done)
  //   });
    
    //  write the actual tests within the request callback
    it('checks the status code  of a request', function (done) {
      request.get('http://127.0.0.1:7865', function (error, response, body) {
        expect(response.statusCode).to.be.equal(200);
        done();
      });
    });

    it('checks the  body of a request', function (done) {
      request.get('http://127.0.0.1:7865', function (error, response, body) {
        expect(response.body).to.be.equal('Welcome to the payment system');
        done();
      });
    });

});