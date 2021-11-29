function solution(inputString) {
  var letters = inputString.split('');
  for (let i = 0; i < letters.length; i++) {
    let n = letters[i].charCodeAt() - 'a'.charCodeAt();
    n = (n + 1) % 26;
    letters[i] = String.fromCharCode(n + 'a'.charCodeAt());
  }
  return letters.join('');
}

solution();
