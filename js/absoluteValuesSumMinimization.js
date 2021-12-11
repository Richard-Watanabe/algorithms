function solution(a) {
  const values = [];
  a.forEach(item => {
    const sum = a.reduce((accum, next) => {
      return accum + Math.abs(next - item);
    }, 0);
    values.push(sum);
  });
  return a;
}

solution();
