import { filterUniqueStrings, filterByProperty } from "./utils";
describe("Filters", () => {
  //filter by property
  test("should filter unique strings", () => {
    //TEST 1
    expect(
      filterUniqueStrings([
        "apple",
        "banana",
        "cherry",
        "apple",
        "date",
        "banana"
      ])
    ).toEqual(["apple", "banana", "cherry", "date"]);
    //TEST 2
    expect(filterUniqueStrings([])).toEqual([]);
    //TEST 3

    expect(filterUniqueStrings(["one", "two", "three"])).toEqual([
      "one",
      "two",
      "three"
    ]);
    //TEST 4
    expect(filterUniqueStrings(["apple", "apple", "apple"])).toEqual(["apple"]);
    //TEST 5
    expect(
      filterUniqueStrings([
        "apple",
        "banana",
        "cherry",
        "apple",
        "date",
        "banana"
      ])
    ).toEqual(["apple", "banana", "cherry", "date"]);
    //TEST 6
    expect(
      filterUniqueStrings([
        "apple",
        "banana",
        "cherry",
        "apple",
        "date",
        "banana"
      ])
    ).toHaveLength(4);
    //TEST 7
    const InvalidException = () => filterUniqueStrings("invalid");
    expect(InvalidException).toThrowError("strings.filter is not a function");
  });

  test("should filter the array by property", () => {
    //test1
    expect(
      filterByProperty(
        [
          { name: "apple", color: "red" },
          { color: "yellow" },
          { name: "cherry", color: "red" }
        ],
        "name"
      )
    ).toEqual([
      { name: "apple", color: "red" },
      { name: "cherry", color: "red" }
    ]);

    //test2

    expect(filterByProperty([], "name")).toEqual([]);

    //test3

    expect(
      filterByProperty(
        [
          { name: "apple", color: "red" },
          { size: 0 },
          { name: "cherry", color: "red" }
        ],
        "size"
      )
    ).toEqual([{ size: 0 }]);

    //test4
    expect(
      filterByProperty(
        [
          { name: "apple", color: "red" },
          { color: "yellow" },
          { name: "cherry", color: "red" }
        ],
        "name"
      )
    ).toEqual([
      { name: "apple", color: "red" },
      { name: "cherry", color: "red" }
    ]);

    //test5
    const InvalidException = () => filterByProperty("invalid", "name");

    expect(InvalidException).toThrowError("objects.filter is not a function");
  });
});
