/**
 *
 * @param {number[][]} matrix
 */
function rotateMatrix90(matrix) {
  const n = matrix.length;

  // tranpose the matrix
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  //   reverse the row
  for (let i = 0; i < n; i++) {
    matrix[i] = matrix[i].reverse();
  }
}

rotateMatrix90([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
