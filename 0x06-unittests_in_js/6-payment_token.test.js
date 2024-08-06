#!/usr/bin/node
const getPaymentTokenFromAPI = require("./6-payment_token");
const { describe, it } = require("mocha");
const { expect } = require("chai");

describe("getPaymentTokenFromAPI", function() {
    it("should return a data property when called with true", function(done) {
        getPaymentTokenFromAPI(true)
            .then((data) => {
                expect(data).to.have.property('data');
                done();
            });
    });
});
