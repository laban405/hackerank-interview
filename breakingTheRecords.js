// find and print the number of times she breaks her
// record for most and least points scored during the season.

//function to find most and least points scored during the seasin
function breakingTheRecords(scores) {
  //init no. of games which is an array
  let games = scores;

  //let maximum and minimum points scored be from the first game
  let minScore = games[0];
  let maxScore = games[0];

  //initialize minimum and maximum records to 0
  let minRecord = 0;
  let maxRecord = 0;

  // loop over every game to compare its points/score against the ones stored
  //in the variables
  for (const currentScore of games) {
    //if current score is greater than maxScore increment maxRecord by 1
    if (maxScore < currentScore) {
      maxScore = currentScore;
      maxRecord++;
    }
    //else if current score is less than maxScore increment minRecord by 1
    else if (currentScore < minScore) {
      minScore = currentScore;
      minRecord++;
    }
  }
  //after looping over every game of the season return maxRecord and minRecord

  return [maxRecord, minRecord];
}

console.log(breakingTheRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]));
console.log(breakingTheRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));
