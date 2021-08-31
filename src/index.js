module.exports = function solveSudoku(matrix) {
  function sq(elMatrix) {
    return elMatrix - (elMatrix % 3);
  }

  function checkN(matrix, row, column, number) {
    for (let i = 0; i < 9; i++) {
      if (matrix[i][column] == number) return false;
    }
    for (let j = 0; j < 9; j++) {
      if (matrix[row][j] == number) return false;
    }

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (matrix[i + sq(row)][j + sq(column)] === number) {
          return false;
        }
      }
    }
    return true;
  }

  function solution(matrix, row, column) {
    if (row == 8 && column == 9) {
      return true;
    }

    if (column == 9) {
      row += 1;
      column = 0;
    }

    if (matrix[row][column] > 0) {
      return solution(matrix, row, column + 1);
    }

    for (let number = 1; number < 10; number++) {
      if (checkN(matrix, row, column, number)) {
        matrix[row][column] = number;
        if (solution(matrix, row, column + 1) == true) {
          return true;
        }
      }
      matrix[row][column] = 0;
    }
    return false;
  }

  solution(matrix, 0, 0);
  return matrix;
};
