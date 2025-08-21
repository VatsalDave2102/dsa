/**
 *
 * @param {number[][]} matrix
 * @returns
 */
function setMatrixZero(matrix) {
  // get the dimensions of matrix
  let n = matrix.length;
  let m = matrix[0].length;

  // for col array, set separate variable so it does not collapse with row array
  let col0 = 1;

  // traverse through matrix
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      // if element is 0
      if (matrix[i][j] === 0) {
        // mark that row's first element as 0
        matrix[i][0] = 0;

        // if it from first column, then mark col0 as 0, else change first element of column as 0
        if (j !== 0) {
          matrix[0][j] = 0;
        } else {
          col0 = 0;
        }
      }
    }
  }

  // again traverse through matrix and dont change first row and first column,
  // change every other element to 0 according to marked rows and columns
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (matrix[i][j] !== 0) {
        if (matrix[i][0] === 0 || matrix[0][j] === 0) {
          matrix[i][j] = 0;
        }
      }
    }
  }

  // change first column's element now
  if (matrix[0][0] === 0) {
    for (let j = 0; j < m; j++) {
      matrix[0][j] = 0;
    }
  }

  //  change first row's elements
  if (col0 === 0) {
    for (let i = 0; i < n; i++) {
      matrix[i][0] = 0;
    }
  }
  return matrix;
}

console.log(setMatrixZero([[1, 0, 3]]));
