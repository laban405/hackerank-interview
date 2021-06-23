//dense ranking
function climbingTheLeaderBoard(scores, alice) {
  //create unique array to remove duplicate scores
  //i used spread operator
  const uniqueScores = [...new Set(scores)];
  const aliceRankingPositions = [];
  let i = uniqueScores.length - 1;

  alice.forEach((score) => {
    while (i >= 0) {
      if (score >= uniqueScores[i]) {
        i--;
      } else {
        aliceRankingPositions.push(i + 2);
        break;
      }
    }
    if (i < 0) {
      aliceRankingPositions.push(1);
    }
  });
  return aliceRankingPositions;
}

console.log(
  climbingTheLeaderBoard([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102])
);
