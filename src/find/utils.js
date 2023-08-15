export const findLongestWord = (sentence) => {
  if (sentence.trim() === "") {
    return undefined;
  }

  const words = sentence.split(" ");
  return words.find(
    (word) => word.length === Math.max(...words.map((word) => word.length))
  );
};

export const findLastNegativeNumber = (arr) => {
  return arr.reverse().find((element) => element < 0);
};
