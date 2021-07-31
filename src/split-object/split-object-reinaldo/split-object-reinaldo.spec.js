import { splitObjectReinaldo } from './split-object-reinaldo.js';

describe('Splits an object into multiple objects with one key/value pair each.', () => {
  it('objects are returned in an array', () => {
    const actual = splitObjectReinaldo({ a: 1, b: 2, c: 3 });
    expect(actual).toEqual([{ a: 1 }, { b: 2 }, { c: 3 }]);
  });
  // it('new objects are returned in an array', () => {
  //   const actual = splitObjectReinaldo({ a: 1, b: 2, c: 3 });
  //   expect(actual).toEqual([{ a: 1 }, { b: 2 }, { c: 3 }]);
  // });
});

describe('Testing with different arguments', () => {
  it('testing with numbers', () => {
    const actual = splitObjectReinaldo({ a: 7, b: 9, c: 15 });
    expect(actual).toEqual([{ a: 7 }, { b: 9 }, { c: 15 }]);
  });
  it('testing with strings', () => {
    const actual = splitObjectReinaldo({
      name: 'Bill',
      lastname: 'Brown',
      city: 'London',
      userName: 'brobil',
    });
    expect(actual).toEqual([
      { name: 'Bill' },
      { lastname: 'Brown' },
      { city: 'London' },
      { userName: 'brobil' },
    ]);
  });
  it('testing with an empty object', () => {
    const actual = splitObjectReinaldo({});
    expect(actual).toEqual([]);
  });
  it('testing with booleans', () => {
    const actual = splitObjectReinaldo({
      name: false,
      lastname: true,
      age: true,
    });
    expect(actual).toEqual([
      { name: false },
      { lastname: true },
      { age: true },
    ]);
  });
  it('testing with NaN, Undefined and null', () => {
    const actual = splitObjectReinaldo({
      name: null,
      lastname: undefined,
      age: NaN,
    });
    expect(actual).toEqual([
      { name: null },
      { lastname: undefined },
      { age: NaN },
    ]);
  });
});
