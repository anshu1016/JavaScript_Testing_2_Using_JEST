import { capitalizeValues, findDuplicates } from "./utils";
describe("Map TEsts", () => {
  test("should capitalize each string", () => {
    //test1

    expect(capitalizeValues(["apple", "banana", "cherry"])).toEqual([
      "Apple",
      "Banana",
      "Cherry"
    ]);

    //test2
    expect(capitalizeValues([])).toEqual([]);

    //test3

    expect(capitalizeValues(["hello world", "goodbye space"])).toEqual([
      "Hello world",
      "Goodbye space"
    ]);

    //test4

    expect(capitalizeValues(["abc", "def"])).not.toBe(["Abc", "Def"]);

    //test5
    expect(capitalizeValues(["!@#", "$%^"])).toEqual(["!@#", "$%^"]);

    //test6
    expect(capitalizeValues(["loRem", "IpSum", "DoLor"])).toEqual([
      "Lorem",
      "Ipsum",
      "Dolor"
    ]);
  });

  test("to find the aray of Duplicates", () => {
    //test1

    expect(findDuplicates([1, 2, 3, 2, 4, 5, 3, 6, 7])).toEqual([2, 3]);

    //test2
    expect(findDuplicates([9, 8, 7, 6, 5, 4, 3, 2, 1])).toEqual([]);

    //test3
    expect(findDuplicates([1, -2, 3, -2, 4, 5, 3, -6, 7])).toEqual([-2, 3]);

    //test4

    expect(findDuplicates([1.5, 2.3, 1.5, 4.8, 2.3])).toEqual([1.5, 2.3]);

    //test5
    expect(findDuplicates([])).toEqual([]);

    //expect(findDuplicates()).toEqual()
  });
});
