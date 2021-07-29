/**
 * Sorts an array of numbers from smallest to largest.
 *
 * Returns a new array without modifying the original array.
 *
 * Does not need to support: NaN, Infinity, -Infinity.
 *
 * @param {number[]} [numArray=[]] - The array of numbers to sort.
 * @returns {number[]} A new array with the same numbers, but sorted.
 * @example
 *
 * sortArrayOfNumbers ([1.5, 1, -1.5, 0, -1]);
 * // -> [-1.5, -1, 0, 1, 1.5]
 *
 * @example
 * sortArrayOfNumbers ([-1, 0, 1]);
 * // -> [-1, 0, 1]
 */
export const sortArrayOfNumbers = (numArray = []) => {
  // create a copy of the original array
  const sortedNumbers = numArray.slice().sort((a, b) => a - b);
  return sortedNumbers; // returns a new sorted array
};
