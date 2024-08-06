#!/usr/bin/node
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('Suite2', function() {
  describe('Sum tests', function() {
    it('checks that the result is rounded', function () { // defines an individual test case
      assert.strictEqual(calculateNumber("SUM", 2.1, 3.2), 5); // actual test code
    });
    it('checks result is rounded[1 decimal]', function () { // defines an individual test case
      assert.strictEqual(calculateNumber("SUM", 3, 3.2), 6); // actual test code
    });
    it('checks result is rounded[1 decimal]', function () { // defines an individual test case
      assert.strictEqual(calculateNumber("SUM", 2.8, 5), 8); // actual test code
    });
    it('checks result is rounded[1 zerol]', function () { // defines an individual test case
      assert.strictEqual(calculateNumber("SUM", 2.1, 0), 2); // actual test code
    });
    it('checks result is rounded[2 zeros]', function () { // defines an individual test case
      assert.strictEqual(calculateNumber("SUM", 0, 0), 0); // actual test code
    });
    it('checks result is rounded[1 negative]', function () { // defines an individual test case
      assert.strictEqual(calculateNumber("SUM", -1, 5), 4); // actual test code
    });
    it('checks result is rounded[2 negative]', function () { // defines an individual test case
      assert.strictEqual(calculateNumber("SUM", -5, -4), -9); // actual test code
    });
  });

  describe('Subtract tests', function (){
    it('checks that the result is rounded', function () { // defines an individual test case
      assert.strictEqual(calculateNumber("SUBTRACT", 2.1, 3.2), -1); // actual test code
    });
    it('checks result is rounded[1 decimal]', function () { // defines an individual test case
      assert.strictEqual(calculateNumber("SUBTRACT", 3, 3.2), 0); // actual test code
    });
    it('checks result is rounded[1 decimal]', function () { // defines an individual test case
      assert.strictEqual(calculateNumber("SUBTRACT", 2.8, 5), -2); // actual test code
    });
    it('checks result is rounded[1 zerol]', function () { // defines an individual test case
      assert.strictEqual(calculateNumber("SUBTRACT", 2.1, 0), 2); // actual test code
    });
    it('checks result is rounded[2 zeros]', function () { // defines an individual test case
      assert.strictEqual(calculateNumber("SUBTRACT", 0, 0), 0); // actual test code
    });
    it('checks result is rounded[1 negative]', function () { // defines an individual test case
      assert.strictEqual(calculateNumber("SUBTRACT", -1, 5), -6); // actual test code
    });
    it('checks result is rounded[2 negative]', function () { // defines an individual test case
      assert.strictEqual(calculateNumber("SUBTRACT", -5, -4), -1); // actual test code
    });
  });

  describe('Divide tests', function (){
    it('checks that the result is rounded', function () { // defines an individual test case
      assert.strictEqual(calculateNumber("DIVIDE", 4.1, 2.2), 2); // actual test code
    });
    it('checks result is rounded[1 decimal]', function () { // defines an individual test case
      assert.strictEqual(calculateNumber("DIVIDE", 3, 3.2), 1); // actual test code
    });
    it('checks result is rounded[1 decimal]', function () { // defines an individual test case
      assert.strictEqual(calculateNumber("DIVIDE", 2.4, 8), 0.2); // actual test code
    });
    it('checks result is rounded[1 zerol]', function () { // defines an individual test case
      assert.strictEqual(calculateNumber("DIVIDE", 2.1, 0), "Error"); // actual test code
    });
    it('checks result is rounded[2 zeros]', function () { // defines an individual test case
      assert.strictEqual(calculateNumber("DIVIDE", 0, 0), "Error"); // actual test code
    });
    it('checks result is rounded[1 negative]', function () { // defines an individual test case
      assert.strictEqual(calculateNumber("DIVIDE", -1, 5), -0.2); // actual test code
    });
    it('checks result is rounded[2 negative]', function () { // defines an individual test case
      assert.strictEqual(calculateNumber("DIVIDE", -4, -2), 1); // actual test code
    });
  });
})
