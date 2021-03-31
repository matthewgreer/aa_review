/*
Write the following functions:

range(start, end) - receives a start and end value, returns an array from start up to end
*/

const range = (start, end) => {
  if (start === end) return [end];
  return [...range(start, end - 1)].concat(end);
}

// console.log(range(1, 10));
// console.log(range(6, 7));
// console.log(range(12, 27));

/*
sumRec(arr) - receives an array of numbers and recursively sums them
*/

function sumRec(arr) {
  if (!arr.length) return 0;
  // if (arr.length === 1) return arr[0];
  let end = arr.length - 1;
  return sumRec(arr.slice(0, end)) + arr[end];
}

// let arr1 = range(1, 4);
// let arr2 = [5, 10, 5, 22, 15, 3];

// console.log(arr1);
// console.log(sumRec(arr1));
// console.log(arr2);
// console.log(sumRec(arr2));

/*
exponent(base, exp) - receives a base and exponent, returns the base raise to the power of the exponent (base ^ exp)

write two versions:
# this is math, not Ruby methods.

# version 1
exp(b, 0) = 1
exp(b, n) = b * exp(b, n - 1)

# recursion 2
exp(b, 0) = 1
exp(b, 1) = b
exp(b, n) = exp(b, n / 2) ** 2             [for even n]
exp(b, n) = b * (exp(b, (n - 1) / 2) ** 2) [for odd n]
*/

function exp1(b, n) {
  if (n === 0) return 1;
  return b * exp1(b, n - 1);
}

// console.log(exp2(2, 6));
// console.log(exp1(2, 6));

function exp2(b, n) {
  if (n === 0) return 1;
  if (n === 1) return b;
  if (n % 2 === 0) return exp2(b, n / 2) ** 2;
  return (exp2(b, (n-1) / 2) ** 2) * b;
}

/*
fibonacci(n) - receives an integer, n, and returns the first n Fibonacci numbers
*/

function fibonacci(n) {
  if (n < 3) return [0, 1].slice(0, n);

  let fibs = fibonacci(n -1);
  fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 1 - 1]);

  return fibs;
}

console.log(fibonacci(1))
console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(4))
console.log(fibonacci(7))
console.log(fibonacci(12))

/*
deepDup(arr) - deep dup of an Array!
💡 Aside: type-checking in javascript
Type checking in JS can get a very strange at times. There's a typeof operator and and an instanceof operator. For our purposes, we need to use the instanceof operator.

*/

// function deepDup(arr) {
// //  if (!Array.isArray(arr)) return [arr];
//  if (!(arr instanceof Array)) return [arr];
//  let oneDArray = [];
//  arr.forEach(el => {
//    return oneDArray.push(...deepDup(el));
//  })
//  return oneDArray;
// }

function deepDup(arr) {
  if (!(arr instanceof Array)) return arr;
  arr.map((el) => {
    return deepDup(el);
  });
}

// let array1 = [
//   1,
//   2,
//   [
//     [3, 4],
//     [5, [6]],
//   ],
//   [7, 8],
// ];

// let array2 = ["this", ["problem", "is"], [["pretty", "tough"], [[":)"]]]];
// console.log(deepDup(array1));
// console.log(deepDup(array2));

/*
bsearch(arr, target) - receives a sorted array, returns the index of the target or -1 if not found
💡 Another aside: Why -1?
In case you are wondering, returning -1 is a common practice when returning the index of an element that does not exist. The reasoning behind this is to return the same type (-1 is also a number) as if the element was found; that way we can still bracket into the array, but will get undefined back. Though this was not the case with Ruby, you will likely see this in other programming languages. Try this on your own if you are curious.
*/

// function bSearch(arr, target) {
//   if (arr.length === 0) return -1;

//   const testIdx = Math.floor(arr.length / 2);
//   const test = arr[testIdx];

//   if (test === target) {
//     return testIdx;
//   } else if (test > target) {
//     return bSearch(arr.slice(0, testIdx), target);
//   } else {
//     const searchGreaters = bSearch(arr.slice(testIdx + 1), target);
//     return searchGreaters === -1 ? -1 : searchGreaters + (testIdx + 1)
//   }
// }

function bSearch(arr, target, min, max) {
  let dupeArr = arr.slice();
  if (min === undefined) min = 0;
  if (max === undefined) max = dupeArr.length - 1;

  let mid = Math.floor(((max - min)/ 2) + min);

  if (max <= min && dupeArr[mid] !== target) {
    return -1;
  } else if (dupeArr[mid] === target) {
    return mid;
  } else if (dupeArr[mid] > target) {
    return bSearch(dupeArr, target, 0, mid);
  } else {
    return bSearch(dupeArr, target, mid + 1, max);
  };
}

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log("=================")
console.log("target: 6");
console.log(bSearch(array1, 6));
console.log("=================")
console.log("target: 2");
console.log(bSearch(array1, 2));
console.log("=================")
console.log("target: 10");
console.log(bSearch(array1, 10));
console.log("=================")
console.log("target: 14");
console.log(bSearch(array1, 14));
console.log("=================")

/*
mergesort(arr) - receives an array, returns a sorted copy of the array by implementing merge sort sorting algorithm
*/

function merge(left, right) {
  const merged = [];
  while (left.length > 0 && right.length > 0) {
    let 
  }
}


/*
subsets(arr) - receives an array, returns an array containing all the subsets of the original array
*/



/*
Recap
As you may have noticed, recursion works much the same in JavaScript as in Ruby. Yay!
*/