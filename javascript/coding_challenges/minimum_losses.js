const minimumLosses = function (requirements, numberFlasks, flaskMarkings) {
  // create an object to track the losses
  const lossesPerFlask = new Map();
  console.log(`Losses Per Flask: ${lossesPerFlask}`);

  // define a helper function to find the marking most closely greater than a requirement and return the difference (loss)
  const findLoss = function (req, markings) {
    // iterate backwards through theseMarkings (so as to test the greatest marking first, and stop when the first marking below the req is found) checking against thisReq
    let loss;
    for (let k = markings.length; k > -1; k--) {
      if (markings[k] < req) {
        loss = markings[k + 1] - req;
        console.log(`from mark ${markings[k + 1]}, req ${req}'s loss is: ${loss}`);
        break;
      }
    }
    return loss;
  };

  // iterate through flask markings array (flasks)
  flaskLoop: for (let i = 0; i < flaskMarkings.length; i++) {
    // create a variable to store losses as they accrue
    let lossCounter = 0;
    let theseMarkings = flaskMarkings[i];
    console.log(`flask ${i}'s markings: ${theseMarkings}`);
    let lastMarkIdx = theseMarkings.length - 1;
    // for each flask, iterate through the order requirements
    reqLoop: for (let j = 0; j < requirements.length; j++) {
      let thisReq = requirements[j];
      console.log(`req ${j}: ${thisReq}`);
      console.log(`flask ${i} greatest mark: ${theseMarkings[lastMarkIdx]}`);
      // eliminate this flask if any thisReq is greater than the greatest mark of that flask, otherwise, find the loss from the mark most closely greater than thisReq and increment lossCounter
      if (thisReq > theseMarkings[lastMarkIdx]) {
        console.log(`flask ${i} is eliminated!`)
        delete lossesPerFlask[i];
        continue flaskLoop; // go to next Flask
      }
      let thisFlasksLoss = findLoss(thisReq, theseMarkings);
      console.log(`flask ${i}'s loss for req ${thisReq}: ${thisFlasksLoss}`);
      lossCounter += thisFlasksLoss;
      
    }
    console.log(`loss counter is now: ${lossCounter}`)
    lossesPerFlask.set(i, lossCounter);
  }
  console.log(`Losses Per Flask: ${lossesPerFlask}`);
  const leastLoss = Math.min(...lossesPerFlask.values());
  for (let [key, val] of lossesPerFlask.entries()) {
    if (val === leastLoss) return key;
  }
}

var order1 = [3, 8, 2, 4, 5];
var order2 = [1, 4, 2, 3, 6, 4, 2, 1, 1, 3];

var flasksNo1 = 3;
var flasksNo2 = 9;

var flasksMarkings1 = [
  [0, 4, 8],
  [0, 5, 8],
  [0, 3, 6],
];
var flasksMarkings2 = [
  [0, 1, 2, 3, 4, 5],
  [0, 2, 10],
  [0, 3, 6, 9],
  [0, 2, 4, 6, 8, 10],
  [0, 99],
  [0, 1, 7],
  [0, 1, 3, 5, 7, 9],
  [0, 5, 10],
  [0, 9],
];

const minLossOrder1Flasks1 = minimumLosses(order1, flasksNo1, flasksMarkings1);
const minLossOrder1Flasks2 = minimumLosses(order1, flasksNo2, flasksMarkings2);
const minLossOrder2Flasks1 = minimumLosses(order2, flasksNo1, flasksMarkings1);
const minLossOrder2Flasks2 = minimumLosses(order2, flasksNo2, flasksMarkings2);

console.log(`For minimum loss on order ${order1}, choose flask ${minLossOrder1Flasks1} with markings ${flasksMarkings1[minLossOrder1Flasks1]}`);
console.log(`For minimum loss on order ${order1}, choose flask ${minLossOrder1Flasks2} with markings ${flasksMarkings2[minLossOrder1Flasks2]}`);
console.log(`For minimum loss on order ${order2}, choose flask ${minLossOrder2Flasks1} with markings ${flasksMarkings1[minLossOrder2Flasks1]}`);
console.log(`For minimum loss on order ${order2}, choose flask ${minLossOrder2Flasks2} with markings ${flasksMarkings2[minLossOrder2Flasks2]}`);
