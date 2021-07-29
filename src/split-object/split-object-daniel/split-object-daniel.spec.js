import { splitObjectDaniel } from './split-object-daniel.js';

describe('splits an object into an array of objects with key-value pairs', () => {
  it('default test', () => {
    const actual = splitObjectDaniel({ a: 1, b: 2, c: 3 });
    expect(actual).toEqual({ a: 1 }, { b: 2 }, { c: 3 });
  });
  // it('empty test', () => {
  //   expect({ }).toEqual({ }, {  }, {  });
  // });
});
