const {distance, power, best, printBest} = require('./calculations');
const linkStations = require('./stations');
const test = require('./test');

test();

printBest(best(0, 0, linkStations));
printBest(best(100, 100, linkStations));
printBest(best(15, 10, linkStations));
printBest(best(18, 18, linkStations));