function solution(inputString) {
  var letters = inputString.split('');
  for (let i = 0; i < letters.length; i++) {
    const n = letters[i].charCodeAt() - 'a'.charCodeAt();
    letters[i] = String.fromCharCode(n + 'a'.charCodeAt());
  }
  return letters.join('');
}

solution();
