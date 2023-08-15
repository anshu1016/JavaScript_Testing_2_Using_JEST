import { findLongestWord, findLastNegativeNumber } from "./utils";

describe("Find Tests", () => {
  test("to find the longest word", () => {
    //TEST1
    expect(
      findLongestWord("The quick brown fox jumps over the lazy dog.")
    ).toEqual("quick");

    //TEST2

    expect(findLongestWord("Hello")).toEqual("Hello");

    //TEST3

    expect(findLongestWord("")).toBe(undefined);

    //TEST4

    const test5 = findLongestWord(
      "The quick brown fox jumps over the lazy dog."
    );
    const getTypo = typeof test5 === "string";
    expect(getTypo).toBe(true);
  });

  test("to find the last negative number", () => {
    //test1

    expect(findLastNegativeNumber([3, -7, -2, 9, -5])).toEqual(-5);

    //test2

    expect(findLastNegativeNumber([3, 7, 2, 9, 5])).toBe(undefined);

    //test3

    expect(findLastNegativeNumber([3.5, -7.2, -2.1, 9.7, 5.3])).toEqual(-2.1);

    //test4

    const test4 = findLastNegativeNumber([3, -7, -2, 9, -5]);

    const getTypo = typeof test4 === "number";
    expect(getTypo).toBe(true);

    //test5
    const test5 = () => findLastNegativeNumber("invalid");
    expect(test5).toThrowError("arr.reverse is not a function");
  });
});
