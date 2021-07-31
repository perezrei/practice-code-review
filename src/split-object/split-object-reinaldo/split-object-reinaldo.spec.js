import { splitObjectReinaldo } from './split-object-reinaldo.js';

describe('Splits an object into multiple objects with one key/value pair each.', () => {
  it('objects are returned in an array', () => {
    const actual = splitObjectReinaldo({ a: 1, b: 2, c: 3 });
    expect(actual).toEqual([{ a: 1 }, { b: 2 }, { c: 3 }]);
  });
  it('another object with decimal numbers', () => {
    const actual = splitObjectReinaldo({
      eyes: 'blue',
      height: 6.2,
      hair: 'black',
    });
    expect(actual).toEqual([
      { eyes: 'blue' },
      { height: 6.2 },
      { hair: 'black' },
    ]);
  });
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
  it('testing with undefined', () => {
    const actual = splitObjectReinaldo({
      name: 'Bob',
      lastname: 'Geldof',
      age: undefined,
    });
    expect(actual).toEqual([
      { name: 'Bob' },
      { lastname: 'Geldof' },
      { age: undefined },
    ]);
  });
  it('testing with null', () => {
    const actual = splitObjectReinaldo({
      name: 'Bob',
      lastname: null,
      age: 25,
    });
    expect(actual).toEqual([{ name: 'Bob' }, { lastname: null }, { age: 25 }]);
  });
});
