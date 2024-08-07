#!/usr/bin/node
const { describe, it } = require('mocha');
const { expect } = require('chai');
const request = require('request');

describe('test simple express app', function() {
  
    
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

describe('test cart ', function() {
    //  write the actual tests within the request callback
    it('checks the status code  of a request', function (done) {
      request.get('http://127.0.0.1:7865/cart/32', function (error, response, body) {
        expect(response.statusCode).to.be.equal(200);
        done();
      });
    });

    it('checks the  body of a request', function (done) {
      request.get('http://127.0.0.1:7865/cart/32', function (error, response, body) {
        expect(body).to.contain(`Payment methods for cart 32`);
        done();
      });
    });
});
    
describe('available payments', function() {
    //  write the actual tests within the request callback
    it('checks the status code  of a request', function (done) {
      request.get('http://127.0.0.1:7865/available_payments', function (error, response, body) {
        expect(response.statusCode).to.be.equal(200);
        done();
      });
    });

    it('checks the  body of a request', function (done) {
      const payMethods = {
        payment_methods: {
        credit_cards: true,
        paypal: false
        }
      }

      request.get('http://127.0.0.1:7865/available_payments', {json: true}, function (error, response, body) {
        expect(body).to.deep.equal(payMethods);
        done();
      });
    });
});

describe('login', function() {
    //  write the actual tests within the request callback
    it('checks the status code  of a request', function (done) {
      request.post('http://127.0.0.1:7865/login', function (error, response, body) {
        expect(response.statusCode).to.be.equal(200);
        done();
      });
    });

    it('checks the  body of a request', function (done) {

      request.post('http://127.0.0.1:7865/login',
        {
          json: true,
          body : {userName: 'Kathy'}
        },
        function (error, response, body) {
        expect(body).to.contain('Hello Kathy');
        done();
      });
    });
});
