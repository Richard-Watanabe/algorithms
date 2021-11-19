function solution(inputArray) {
  const max = inputArray.reduce((prev, curr) => {
    return curr > prev ? curr : prev;
  });
  for (let i = 2; i <= max; i++) {
    if (inputArray.every(obstacle => obstacle % i !== 0)) {
      return i;
    }
  }
  return max + 1;
}

solution();
