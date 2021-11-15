function solution(inputArray) {
  let difference = 0;
  let max = 0;
  for (let i = 0; i < inputArray.length; i++) {
    difference = Math.abs(inputArray[i] - inputArray[i + 1]);
    if (difference > max) {
      max = difference;
    }
  }
  return max;
}

solution();
