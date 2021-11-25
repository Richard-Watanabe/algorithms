function minesweeper(matrix) {
  const game = [];
  for (let i = 0; i < matrix.length; i++) {
    game.push([]);
    for (let j = 0; j < matrix[0].length; j++) {
      game[i][j] = 0;
      if (matrix[i - 1] !== undefined) {
        if (matrix[i - 1][j]) {
          game[i][j]++;
        }
      }
      if (matrix[i + 1] !== undefined) {
        if (matrix[i + 1][j]) {
          game[i][j]++;
        }
      }
      if (matrix[i][j - 1] !== undefined) {
        if (matrix[i][j - 1]) {
          game[i][j]++;
        }
      }
      if (matrix[i][j + 1] !== undefined) {
        if (matrix[i][j + 1]) {
          game[i][j]++;
        }
      }
      if (matrix[i - 1] !== undefined) {
        if (matrix[i - 1][j - 1]) {
          game[i][j]++;
        }
      }
      if (matrix[i - 1] !== undefined) {
        if (matrix[i - 1][j + 1]) {
          game[i][j]++;
        }
      }
    }
  }
  return game;
}

minesweeper();
