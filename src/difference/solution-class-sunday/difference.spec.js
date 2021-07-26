import { difference } from './difference.js';

describe('returns array of values that are only in the first array', () => {
  it('empty arrays', () => {
    const actual = difference([], []);
    expect(actual).toEqual([]);
  });
  it('arrays of strings', () => {
    const actual = difference(['hello', 'thank you', 'bye'], ['hello', 'bye']);
    expect(actual).toEqual(['thank you']);
  });
  it('arrays of numbers', () => {
    const actual = difference([3, 5, 7, 9], [5, 7, 9, 11]);
    expect(actual).toEqual([3]);
  });
  it('arrays of different types', () => {
    const actual = difference(
      [null, undefined, true, false, 2],
      [1, undefined, true, false],
    );
    expect(actual).toEqual([null, 2]);
  });
});
