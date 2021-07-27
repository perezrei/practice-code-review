import { findIntersection } from './intersection-rayane.js';

describe('findIntersection finds all the values shared between two arrays and return a new array of their intersection.', () => {
  describe('gets intersection of two arrays with the same types of value', () => {
    it('arrays of strings', () => {
      const actual = findIntersection(
        ['green', 'yellow', 'blue'],
        ['green', 'yellow', 'red'],
      );
      const expected = ['green', 'yellow'];
      expect(actual).toEqual(expected);
    });
    it('arrays of whole numbers', () => {
      const actual = findIntersection([1, 2, 3, 4], [4, 5, 6, 7]);
      const expected = [4];
      expect(actual).toEqual(expected);
    });
    it('arrays of decimal numbers', () => {
      const actual = findIntersection([0.1, 2.1, 3.2], [2.1, 2.2, 2.3]);
      const expected = [2.1];
      expect(actual).toEqual(expected);
    });
  });
  describe('gets intersection of two arrays with multiple types of values', () => {
    it('arrays of strings and whole numbers', () => {
      const actual = findIntersection(['1', 3, 'car'], ['4', 5, 'car']);
      const expected = ['car'];
      expect(actual).toEqual(expected);
    });
    it('arrays of strings and decimal numbers', () => {
      const actual = findIntersection(
        ['bus', 1.1, 'train'],
        ['airplane', 1.1, 'bus'],
      );
      const expected = ['bus', 1.1];
      expect(actual).toEqual(expected);
    });
    it('arrays of strings and mixed positive and negative numbers', () => {
      const actual = findIntersection(
        ['bus', -1, 'train', -3],
        ['car', -2, 'train', -3],
      );
      const expected = ['train', -3];
      expect(actual).toEqual(expected);
    });
    it('arrays of strings, numbers and boolean values', () => {
      const actual = findIntersection(
        ['bus', -1, true, -3],
        ['bus', -2, false, -3],
      );
      const expected = ['bus', -3];
      expect(actual).toEqual(expected);
    });
  });
  describe('gets intersection of increasing ordered array and decreasing ordered array', () => {
    it('first array is increasing ordered', () => {
      const actual = findIntersection(
        ['a', 'b', 'c', 'd'],
        ['b', 'd', 'g', 'f'],
      );
      const expected = ['b', 'd'];
      expect(actual).toEqual(expected);
    });
    it('second array is increasing ordered', () => {
      const actual = findIntersection([3, 5, 7, 2], [1, 2, 3, 4]);
      const expected = [3, 2];
      expect(actual).toEqual(expected);
    });
  });
  describe('gets intersection of two arrays with different lengths', () => {
    it('first array has the longest length', () => {
      const actual = findIntersection([1, 2, 3, 4, 5, 6], [5, 7, 9]);
      const expected = [5];
      expect(actual).toEqual(expected);
    });
    it('second array has the longest length', () => {
      const actual = findIntersection(
        ['apple', 'banana', 'coconut', 'dragonfruit'],
        ['banana', 'cherry', 'avocado'],
      );
      const expected = ['banana'];
      expect(actual).toEqual(expected);
    });
  });
  describe('gets intersection of empty arrays', () => {
    it('first array is empty', () => {
      const actual = findIntersection(
        [],
        ['Bill', 'Dianna', 'George', 'Fiona'],
      );
      const expected = [];
      expect(actual).toEqual(expected);
    });
    it('second array is empty', () => {
      const actual = findIntersection(['Felicity', 'Harry', 23, 34], []);
      const expected = [];
      expect(actual).toEqual(expected);
    });
  });
  describe('testing for side-effects', () => {
    it('returns a new array', () => {
      const arg1 = ['banana', 'cherry', 'avocado'];
      const arg2 = ['mango', 'cherry', 'apple'];
      const returnedArray = findIntersection(arg1, arg2);
      const notTheSame = arg1 !== returnedArray;
      expect(notTheSame).toEqual(true);
    });
  });
});
