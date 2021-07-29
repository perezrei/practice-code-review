/**
 * Creates an array of values that are in both the first and the second arrays.
 *
 * Repeated values are not duplicated in the return value, and the order of result values are determined by the first array.
 *
 * **Note:** This function returns a new array, and has no side-effects.
 *
 * @param {Array} [array1=[]] - The array to inspect.
 * @param {Array} [array2=[]] - The values to include.
 * @returns {Array} Returns the new array of filtered values.
 *
 * @example
 *
 * intersection([2, 1], [2, 3]);
 * // -> [2]
 *
 * @example
 *
 * intersection([2, 1, 2], [2, 3]);
 * // -> [2]
 */

export const findIntersection = (array1 = [], array2 = []) => {
  // create a new empty array to store the common items
  const commonItems = [];
  // use nested loops on length of both arrays
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        // if item is present in both arrays
        commonItems.push(array1[i]); // add to the new array
      }
    }
  }
  // remove duplicate elements from the new array
  const removeDuplicateItems = commonItems.filter((value, index) => {
    return commonItems.indexOf(value) === index;
  });
  return removeDuplicateItems;
};
