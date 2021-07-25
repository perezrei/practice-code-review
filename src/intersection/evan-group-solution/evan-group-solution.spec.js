import { evanGroupSolution } from './evan-group-solution.js';

describe('creating a new array with the intersection of two arrays', () => {
  it('arrays containing strings', () => {
    const actual = evanGroupSolution(['apple', 'banana'], ['apple', 'orange']);
    expect(actual).toEqual(['apple']);
  });
  it('arrays with numbers', () => {
    const actual = evanGroupSolution([1, 2, 3], [2, 3, 4]);
    expect(actual).toEqual([2, 3]);
  });
  it('arrays with decimals and integers', () => {
    const actual = evanGroupSolution([0.23, 3, 45.0907], [2.3, 0.23]);
    expect(actual).toEqual([0.23]);
  });
});
