function almostIncreasingSequence(sequence) {
  let count = 0;
  for (var i = 0; i < sequence.length; i++) {
    if (sequence[i] <= sequence[i - 1]) {
      count++;
      if (count > 1) {
        return false;
      }
      if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]) {
        return false;
      }
    }
  }
  return true;
}

almostIncreasingSequence();
