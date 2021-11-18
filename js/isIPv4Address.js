function solution(inputString) {
  const array = inputString.split('.');
  if (array.length === 4) {
    return array.every(number => {
      if (number >= 0 && number <= 255 && number !== '' && number !== '00' && number !== '01') {
        return true;
      }
      return false;
    });
  }
  return false;
}

solution();
