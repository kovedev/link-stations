/**
 * @param {number} fromX - Point to calculate x coordinate from
 * @param {number} fromY - Point to calculate y coordinate from
 * @param {number} toX - Point to calculate x coordinate to
 * @param {number} toY - Point to calculate y coordinate to
*/
const distance = (fromX, fromY, toX, toY) => {
  return Math.sqrt(Math.pow(toX - fromX, 2) + Math.pow(toY - fromY, 2));
};

/**
 * @param {number} reach - reach of a station
 * @param {number} distance - distance beetween two points
*/
const power = (reach,  distance) => {
  if (distance > reach)
    return 0;
  return Math.pow(reach - distance, 2);
};

/**
 * @param {number} pointX - Point to calculate x coordinate from
 * @param {number} pointY - distance beetween two points
 * @param {Array} stations - link station arrays [x, y, r]
*/
const best = ( pointX, pointY, stations) => {
  let bestStation = null;
  let bestPower = 0;
  
  stations.forEach(station => {
    if(power(station[2], distance(pointX, pointY, station[0], station[1])) > bestPower) {
      bestStation = station;
      bestPower = power(station[2], distance(pointX, pointY, station[0], station[1]));
    }
  });

  return ({
    pointX: pointX, 
    pointY: pointY,
    bestStation: bestStation, 
    bestPower: bestPower
  });
};

/**
 * @param {Object} data - Data from best function
*/
const printBest = (data) => {
  const {pointX, pointY, bestStation, bestPower} = data;
  if (bestStation === null)
    console.log(`No link station within reach for point ${pointX},${pointY}`) ;
  else 
    console.log(`Best link station for point ${pointX},${pointY} is ${bestStation[0]},${bestStation[1]} with power ${bestPower}`);
}

module.exports = {
  distance,
  power,
  best,
  printBest,
};