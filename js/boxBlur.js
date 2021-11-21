function solution(image) {
  var newImage = image.slice().map(num => num.slice());
  for (let i = 1; i < image.length - 1; i++) {
    for (let j = 1; j < image[0].length - 1; j++) {
      const sum = image.slice(i - 1, i + 2).reduce((acc, num) => acc + num.slice(j - 1, j + 2).reduce((a, b) => a + b), 0);
      newImage[i][j] = Math.floor(sum / 9);
    }
  }
  newImage.pop();
  newImage.shift();
  return newImage;
}

solution();
