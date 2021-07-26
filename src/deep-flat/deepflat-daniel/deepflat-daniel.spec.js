import { deepFlatDaniel } from './deepflat-daniel.js';

describe('flatten an array', () => {
  it('empty array test', () => {
    const actual = deepFlatDaniel([]);
    expect(actual).toEqual([]);
  });
  it('normal array test', () => {
    const actual = deepFlatDaniel([1, 2, 3]);
    expect(actual).toEqual([1, 2, 3]);
  });
  it('deep array test', () => {
    const actual = deepFlatDaniel([1, [2, 3]]);
    expect(actual).toEqual([1, 2, 3]);
  });
  it('tricky array test', () => {
    const actual = deepFlatDaniel([null, [Infinity, NaN]]);
    expect(actual).toEqual([null, Infinity, NaN]);
  });
  it('string array test', () => {
    const actual = deepFlatDaniel(['egg', ['chicken', 'omelette']]);
    expect(actual).toEqual(['egg', 'chicken', 'omelette']);
  });
  it('mixed array test', () => {
    const actual = deepFlatDaniel(['egg', [2, ['omelette']]]);
    expect(actual).toEqual(['egg', 2, 'omelette']);
  });
  describe('has no side-effects', () => {
    it('returns a new array', () => {
      const actual = [];
      const returned = deepFlatDaniel(actual);
      const areDifferent = actual !== returned;
      expect(areDifferent).toEqual(true);
    });
    it('does not modify the argument', () => {
      const arg = [3, 2, 1];
      deepFlatDaniel(arg);
      expect(arg).toEqual([3, 2, 1]);
    });
  });
});
