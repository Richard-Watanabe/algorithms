function arrayChange(inputArray) {
  let max = inputArray[0];
  let count = 0;
  for (let i = 1; i < inputArray.length; i++) {
    if (inputArray[i] <= max) {
      count += max - inputArray[i] + 1;
      inputArray[i] = max + 1;
    }
    max = inputArray[i];
  }
  return count;
}

arrayChange();
