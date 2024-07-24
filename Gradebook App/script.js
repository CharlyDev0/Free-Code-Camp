function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}
function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score > 89) {
    return "B";
  } else if (score > 79) {
    return "C";
  } else if (score > 69) {
    return "D";
  } else{return "F";}
    ;
}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));