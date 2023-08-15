export function capitalizeValues(arr) {
  return arr.map((str) => {
    const firstChar = str.charAt(0).toUpperCase();
    const restOfStr = str.slice(1).toLowerCase();
    return firstChar + restOfStr;
  });
}

export function findDuplicates(arr) {
  const uniqueNumbers = new Set();
  const duplicates = new Set();

  for (const num of arr) {
    if (uniqueNumbers.has(num)) {
      duplicates.add(num);
    } else {
      uniqueNumbers.add(num);
    }
  }

  return Array.from(duplicates);
}
