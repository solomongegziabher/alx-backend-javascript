const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function () {
  it('test #1', function () {
    assert.equal(calculateNumber(1, 3), 4);
  });
  it('test #2', function () {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it('test #3', function () {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
  it('test #4', function () {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
  it('test #5', function () {
    assert.equal(calculateNumber(3.5, 3.2), 7);
  });
  it('test #6', function () {
    assert.equal(calculateNumber(3.5, 3.2), 7);
  });
});
