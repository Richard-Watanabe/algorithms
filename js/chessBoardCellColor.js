function solution(cell1, cell2) {
  const letters = 'ABCDEFGH';
  cell1 = letters.indexOf(cell1[0]);
  cell2 = letters.indexOf(cell2[0]);
  return cell1 % 2 === cell2 % 2;
}

solution();
