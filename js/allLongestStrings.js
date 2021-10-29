function allLongestStrings(inputArray) {
  let max = 0;
  const allLongest = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length > max) {
      max = inputArray[i].length;
    }
  }
  for (let j = 0; j < inputArray.length; j++) {
    if (inputArray[j].length === max) {
      allLongest.push(inputArray[j]);
    }
  }
  return allLongest;
}

allLongestStrings();
