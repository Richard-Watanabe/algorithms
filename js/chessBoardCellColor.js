function solution(cell1, cell2) {
  const letters = 'ABCDEFGH';
  cell1 = letters.indexOf(cell1[0]) + Number(cell1[1]);
  cell2 = letters.indexOf(cell2[0]) + Number(cell2[1]);
  cell1 = cell1 % 2;
  cell2 = cell2 % 2;
  return cell1 === cell2;
}

solution();
