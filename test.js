const {distance, power, best} = require('./calculations');
const assert = require('assert');

// use static stations for testing
const linkStations = [
  [0, 0, 10],
  [20, 20, 5],
  [10, 0, 12]
];

const test = () => {
  assert.equal(power(10, 5), 25, 'Power should be correct');
  assert.equal(power(5, 10), 0, 'Power should be correct');
  assert.equal(power(14,2), 144, 'Power should be correct');
  assert.equal(power(11,13), 0, 'Power should be correct');
  
  assert.equal(distance(0,0,10,10), 14.142135623730951, 'Distance should be correct');
  assert.equal(distance(1,2,3,4), 2.8284271247461903, 'Distance should be correct');
  assert.equal(distance(10,10,109,101), 134.46932735757994, 'Distance should be correct');
  assert.equal(distance(-1,-2,1,-4), 2.8284271247461903, 'Distance should be correct');
  
  assert.deepEqual(best(0, 0, linkStations), {
    pointX: 0, 
    pointY: 0,
    bestStation: [0, 0, 10], 
    bestPower: 100
  }, 'Station should be correct');
  assert.deepEqual(best(5, 10, linkStations), {
    pointX: 5,
    pointY: 10,
    bestStation: [ 10, 0, 12 ],
    bestPower: 0.6718427000252355
  }, 'Station should be correct');
  assert.deepEqual(best(11, 15, linkStations), { 
    pointX: 11, 
    pointY: 15, 
    bestStation: null, 
    bestPower: 0 
  }, 'Station should be correct');
  assert.deepEqual(best(11, 15, linkStations), { 
    pointX: 11, 
    pointY: 15, 
    bestStation: null, 
    bestPower: 0 
  }, 'Station should be correct');  
};

module.exports = test;