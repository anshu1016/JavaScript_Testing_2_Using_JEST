import { sumNestedArrays, calculateFactorial } from "./utils";
describe("Reduce TEsts", () => {
  test("to return the sum of all nubers in array", () => {
    //test1

    expect(sumNestedArrays([[1, 2], [3, 4, 5], [6]])).toEqual(21);

    //test2
    expect(sumNestedArrays([])).toEqual(0);

    //test3
    expect(sumNestedArrays([[1, 2], [3, 4, 5], [6]])).not.toBe([
      [1, 2],
      [3, 4, 5],
      [6]
    ]);

    //test4

    const test4 = sumNestedArrays([[1, 2], [3, 4, 5], [6]]);
    const getTypo = typeof test4 === "number";
    expect(getTypo).toEqual(true);

    //expect(sumNestedArrays()).toEqual()
  });

  test("to return the factorial", () => {
    //test1
    expect(calculateFactorial(0)).toEqual(1);

    //test2
    expect(calculateFactorial(1)).toEqual(1);

    //test3
    expect(calculateFactorial(5)).toEqual(120);

    //test4
    expect(calculateFactorial(10)).toEqual(3628800);

    //test5
    const test5 = calculateFactorial(5);
    const getTypo = typeof test5 === "number";
    expect(getTypo).toEqual(true);

    //test6
    const test6 = () => calculateFactorial(-5);

    expect(test6).toThrowError("Input must be a non-negative integer.");

    //expect(calculateFactorial()).toEqual()
  });
});
