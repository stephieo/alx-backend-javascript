#!/usr/bin/node
const expect = require('chai').expect;
const calculateNumber = require('./1-calcul');
const { describe, it } = require('mocha');

describe('Suite2', function() {
  describe('Sum tests', function() {
    it('checks that the result is rounded', function () { // defines an individual test case
      expect(calculateNumber("SUM", 2.1, 3.2)).to.be.equal(5);
    });
    it('checks result is rounded[1 decimal]', function () { // defines an individual test case
      expect(calculateNumber("SUM", 3, 4.9)).to.be.equal(8)
    });
    it('checks result is rounded[1 decimal]', function () { // defines an individual test case
      expect(calculateNumber("SUM", 2.8, 5)).to.be.equal(8);
    });
    it('checks result is rounded[1 zerol]', function () { // defines an individual test case
      expect(calculateNumber("SUM", 2.1, 0)).to.be.equal(2);
    });
    it('checks result is rounded[2 zeros]', function () { // defines an individual test case
      expect(calculateNumber("SUM", 0, 0),).to.be.equal(0);
    });
    it('checks result is rounded[1 negative]', function () { // defines an individual test case
      expect(calculateNumber("SUM", -1, 5)).to.be.equal(4);
    });
    it('checks result is rounded[2 negative]', function () { // defines an individual test case
      expect(calculateNumber("SUM", -5, -4)).to.be.equal(-9);
    });
  });

  describe('Subtract tests', function (){
    it('checks that the result is rounded', function () { // defines an individual test case
      expect(calculateNumber("SUBTRACT", 2.1, 3.2)).to.be.equal(-1);
    });
    it('checks result is rounded[1 decimal]', function () { // defines an individual test case
      expect(calculateNumber("SUBTRACT", 3, 3.2)).to.be.equal(0);
    });
    it('checks result is rounded[1 decimal]', function () { // defines an individual test case
      expect(calculateNumber("SUBTRACT", 2.8, 5)).to.be.equal(-2);
    });
    it('checks result is rounded[1 zerol]', function () { // defines an individual test case
      expect(calculateNumber("SUBTRACT", 2.1, 0)).to.be.equal(2);
    });
    it('checks result is rounded[2 zeros]', function () { // defines an individual test case
      expect(calculateNumber("SUBTRACT", 0, 0)).to.be.equal(0);
    });
    it('checks result is rounded[1 negative]', function () { // defines an individual test case
      expect(calculateNumber("SUBTRACT", -1, 5)).to.be.equal(-6);
    });
    it('checks result is rounded[2 negative]', function () { // defines an individual test case
     expect(calculateNumber("SUBTRACT", -5, -4)).to.be.equal(-1);
    });
  });

  describe('Divide tests', function (){
    it('checks that the result is rounded', function () { // defines an individual test case
      expect(calculateNumber("DIVIDE", 4.1, 2.2)).to.be.equal(2);
    });
    it('checks result is rounded[1 decimal]', function () { // defines an individual test case
      expect(calculateNumber("DIVIDE", 3, 3.2)).to.be.equal(1);
    });
    it('checks result is rounded[1 decimal]', function () { // defines an individual test case
      expect(calculateNumber("DIVIDE", 2.4, 8)).to.be.equal(0.25);
    });
    it('checks result is rounded[1 zerol]', function () { // defines an individual test case
      expect(calculateNumber("DIVIDE", 2.1, 0)).to.be.equal("Error");
    });
    it('checks result is rounded[2 zeros]', function () { // defines an individual test case
      expect(calculateNumber("DIVIDE", 0, 0)).to.be.equal("Error");
    });
    it('checks result is rounded[1 negative]', function () { // defines an individual test case
      expect(calculateNumber("DIVIDE", -1, 5)).to.be.equal(-0.2);
    });
    it('checks result is rounded[2 negative]', function () { // defines an individual test case
      expect(calculateNumber("DIVIDE", -4, -2)).to.be.equal(2);
    });
  });
})
