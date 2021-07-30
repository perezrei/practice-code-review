# Sort Numbers: use a built-in array method

Takes in an array of numbers and returns a new array with the same numbers sorted from smallest to largest.

---

## Strategy

I chose to add a slice method before passing the compare function to the sort method to prevent the original array to be modified.

---

## Implementation

- .splice() - to keep the original array intact and prevent it from being changed.
- .sort() - to sort an array of numbers in ascending numerical order.
- .filter() - to filter out only numbers in an array.
- Number.isFinite() - will not return true for any value that is not of the type number.

---

## Use Cases

If we have an array of users where each user object consists of a name and age property. We could sort the array based on the user’s age in ascending order.

```js
const users = [
  { name: 'Mary', age: 34 },
  { name: 'John', age: 19 },
  { name: 'Alex', age: 25 },
];
const sortUsers = users.slice().sort((firstUser, secondUser) => {
  if (firstUser.age < secondUser.age) return -1;
  if (firstUser.age > secondUser.age) return 1;
  return 0;
});

console.log(sortUsers); /* [ { name: 'John', age: 19 },
  { name: 'Alex', age: 25 },
  { name: 'Mary', age: 34 } ] */
```

---

## Inspiration

[This code from Yogesh](https://codepen.io/myogeshchavan97/pen/MWYzmQp?editors=0011).

[MDN - Number.isFinite](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite).
