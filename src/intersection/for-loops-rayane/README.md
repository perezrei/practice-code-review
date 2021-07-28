# Intersection: Use for-loop

Write a function that finds all the values shared between two arrays.

```js
/**
 * Creates an array of values that are in both the first and the second arrays.
 *
 * Repeated values are not duplicated in the return value, and the order of result values are determined by the first array.
 *
 * **Note:** This function returns a new array, and has no side-effects.
 *
 * @param {Array} [array=[]] - The array to inspect.
 * @param {Array} [values=[]] - The values to include.
 * @returns {Array} Returns the new array of filtered values.
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
```

---

## Strategy

I chose to used nested for-loops and push() method to solve this challenge.

Iteration with stepper variable.

1. Create a new empty array to store the common items.
2. Loop through array1 and iterate it from beginning to the end.
3. Loop through array2 and iterate it from beginning to the end.
4. Compare each item from array1 to array2 and if it finds any common item then return to a new array.

---

## Implementation

- for-loop - It iterates through two arrays.
- .push() - It places the common elements of two arrays to a new array.

---

## Use Cases

You could use this function to find the common friends of a group of users.

```js
const findMutualFriends = (list1 = [], list2 = []) => {
  const commonFriends = [];

  for (let i = 0; i < list1.length; i++) {
    for (let j = 0; j < list2.length; j++) {
      if (list1[i] === list2[j]) {
        commonFriends.push(list1[i]);
      }
    }
  }
  return commonFriends;
};

const listOfMutualFriends = findMutualFriends(
  ['Bill', 'Dianna', 'George', 'Fiona', 'Felicity'],
  ['Karen', 'Fiona', 'Harry', 'Bill'],
);
console.log(listOfMutualFriends); //["Bill", "Fiona"]
```

---

## Inspiration

[This article from JavaScript in Plain English](https://javascript.plainenglish.io/typescript-intersection-best-practice-6a7de85bb2f1).
