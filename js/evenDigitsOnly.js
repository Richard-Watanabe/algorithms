function solution(n) {
  const num = String(n).split('');
  return num.every(x => x % 2 === 0);
}

solution();
