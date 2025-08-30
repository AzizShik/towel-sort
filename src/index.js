module.exports = function towelSort(matrix) {
  if (!matrix) return [];
  return matrix
    .map((arr, idx) => {
      if ((idx + 1) % 2 === 0) {
        return arr.reverse().flat();
      }

      return arr.flat();
    })
    .flat();
};
