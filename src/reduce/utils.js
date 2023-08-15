export const sumNestedArrays = (arr) => {
  return arr.reduce(
    (sum, curr) => sum + curr.reduce((innerSum, num) => innerSum + num, 0),
    0
  );
};

export const calculateFactorial = (n) => {
  if (n < 0) {
    throw new Error("Input must be a non-negative integer.");
  }
  return n === 0
    ? 1
    : Array.from({ length: n }, (_, i) => i + 1).reduce(
        (product, num) => product * num,
        1
      );
};
