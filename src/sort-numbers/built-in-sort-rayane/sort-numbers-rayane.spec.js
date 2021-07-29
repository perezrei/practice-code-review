import { sortArrayOfNumbers } from './sort-numbers-rayane.js';

describe('sortArrayOfNumbers sorts an array of numbers', () => {
  describe('sorts positive numbers', () => {
    it('whole numbers', () => {
      const received = sortArrayOfNumbers([25, 45, 10, 3, 81]);
      const expected = [3, 10, 25, 45, 81];
      expect(received).toEqual(expected);
    });
    it('decimal numbers', () => {
      const received = sortArrayOfNumbers([9.4, 0.01, 4.1, 1.11]);
      const expected = [0.01, 1.11, 4.1, 9.4];
      expect(received).toEqual(expected);
    });
    it('mixed whole and decimal numbers', () => {
      const received = sortArrayOfNumbers([4.52, 0.2, 9.7]);
      const expected = [0.2, 4.52, 9.7];
      expect(received).toEqual(expected);
    });
  });
  describe('sorts negative numbers', () => {
    it('whole numbers', () => {
      const received = sortArrayOfNumbers([-1, 0, -3, -2, -5]);
      const expected = [-5, -3, -2, -1, 0];
      expect(received).toEqual(expected);
    });
    it('decimal numbers', () => {
      const received = sortArrayOfNumbers([-1.4, -3.01, -2.56, -5.09]);
      const expected = [-5.09, -3.01, -2.56, -1.4];
      expect(received).toEqual(expected);
    });
    it('mixed whole and decimal numbers', () => {
      const received = sortArrayOfNumbers([0, -1.2, -3.01, -2, -5.09]);
      const expected = [-5.09, -3.01, -2, -1.2, 0];
      expect(received).toEqual(expected);
    });
  });
  describe('sorts mixed positive and negative numbers', () => {
    it('whole numbers', () => {
      const received = sortArrayOfNumbers([0, 1, -1, 2, -2]);
      const expected = [-2, -1, 0, 1, 2];
      expect(received).toEqual(expected);
    });
    it('decimal numbers', () => {
      const received = sortArrayOfNumbers([0, 1.4, -1.01, 2.99, -2.34]);
      const expected = [-2.34, -1.01, 0, 1.4, 2.99];
      expect(received).toEqual(expected);
    });
    it('mixed whole and decimal numbers', () => {
      const received = sortArrayOfNumbers([-1, 3.01, 0, 2, -5.09]);
      const expected = [-5.09, -1, 0, 2, 3.01];
      expect(received).toEqual(expected);
    });
  });
  describe('testing for tricky edge cases', () => {
    it('string numbers and numerical values', () => {
      const received = sortArrayOfNumbers(['1', 2, '2', 3, 100, '100']);
      const expected = [2, 3, 100];
      expect(received).toEqual(expected);
    });
    it('boolean values and numbers', () => {
      const received = sortArrayOfNumbers([true, 0, 2, false]);
      const expected = [0, 2];
      expect(received).toEqual(expected);
    });
    it('empty values', () => {
      const actual = sortArrayOfNumbers([]);
      const expected = [];
      expect(actual).toEqual(expected);
    });
  });
  describe('has no side-effects', () => {
    it('returns a new array', () => {
      const arg = [];
      const returned = sortArrayOfNumbers(arg);
      const areDifferent = arg !== returned;
      expect(areDifferent).toEqual(true);
    });
    it('does not modify the argument', () => {
      const arg = [30, 10, 34];
      sortArrayOfNumbers(arg);
      expect(arg).toEqual([30, 10, 34]);
    });
  });
});
