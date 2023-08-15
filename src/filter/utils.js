export const filterUniqueStrings = (strings) => {
  return strings.filter((str, index, arr) => arr.indexOf(str) === index);
};

export const filterByProperty = (objects, property) => {
  return objects.filter((obj) => obj.hasOwnProperty(property));
};
