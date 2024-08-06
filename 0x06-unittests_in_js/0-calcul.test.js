#!/usr/bin/node
const assert = require('assert');
const calculateNumber = require('./0-calcul');
const { it } = require('mocha');

describe('calculateNumber', function(){ // creates a test suite named calculateNumber
  it('checks that the result is rounded', function () { // defines an individual test case
    assert.strictEqual(calculateNumber(2.1, 3.2), 5); // actual test code
  });
  it('checks result is rounded[1 decimal]', function () { // defines an individual test case
    assert.strictEqual(calculateNumber(3, 3.2), 6); // actual test code
  });
  it('checks result is rounded[1 decimal]', function () { // defines an individual test case
    assert.strictEqual(calculateNumber(2.8, 5), 8); // actual test code
  });
  it('checks result is rounded[1 zerol]', function () { // defines an individual test case
    assert.strictEqual(calculateNumber(2.1, 0), 2); // actual test code
  });
  it('checks result is rounded[2 zeros]', function () { // defines an individual test case
    assert.strictEqual(calculateNumber(0, 0), 0); // actual test code
  });
  it('checks result is rounded[1 negative]', function () { // defines an individual test case
    assert.strictEqual(calculateNumber(-1, 5), 4); // actual test code
  });
  it('checks result is rounded[2 negative]', function () { // defines an individual test case
    assert.strictEqual(calculateNumber(-5, -4), -9); // actual test code
  });
});