console.log("PHASE 4 - RECURSION (aka HELL)");

/*
Write the following functions:

range(start, end) - receives a start and end value, returns an array from start up to end
*/

console.log("range(start, end)")

const range = (start, end) => {
  if (start === end) return [end];
  return [...range(start, end - 1)].concat(end);
}

console.log(range(1, 10));
console.log(range(6, 7));
console.log(range(12, 27));

/*
sumRec(arr) - receives an array of numbers and recursively sums them
*/

console.log("sumRec(arr)")

function sumRec(arr) {
  if (!arr.length) return 0;
  // if (arr.length === 1) return arr[0];
  let end = arr.length - 1;
  return sumRec(arr.slice(0, end)) + arr[end];
}

let phase4Arr1 = range(1, 4);
let phase4Arr2 = [5, 10, 5, 22, 15, 3];

console.log(phase4Arr1);
console.log(sumRec(phase4Arr1));
console.log(phase4Arr2);
console.log(sumRec(phase4Arr2));

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

console.log("exp1(base, exp)");

function exp1(b, n) {
  if (n === 0) return 1;
  return b * exp1(b, n - 1);
}

console.log(exp1(2, 6));

console.log("exp2(base, exp)");

function exp2(b, n) {
  if (n === 0) return 1;
  if (n === 1) return b;
  if (n % 2 === 0) return exp2(b, n / 2) ** 2;
  return (exp2(b, (n-1) / 2) ** 2) * b;
}

console.log(exp2(2, 6));

/*
fibonacci(n) - receives an integer, n, and returns the first n Fibonacci numbers
*/

console.log("fibonacci(n)");

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

console.log("deepDup(arr)");

function deepDup(arr) {
  if (!(arr instanceof Array)) {
    return arr;
  }
  return arr.map((el) => {
    return deepDup(el);
  });
}

let deepArray1 = [
  1,
  2,
  [
    [3, 4],
    [5, [6]],
  ],
  [7, 8],
];

let deepArray2 = ["this", ["problem", "is"], [["pretty", "tough"], [[":)"]]]];

console.log(deepDup(deepArray1));
console.log(deepDup(deepArray2));

/*
bsearch(arr, target) - receives a sorted array, returns the index of the target or -1 if not found
💡 Another aside: Why -1?
In case you are wondering, returning -1 is a common practice when returning the index of an element that does not exist. The reasoning behind this is to return the same type (-1 is also a number) as if the element was found; that way we can still bracket into the array, but will get undefined back. Though this was not the case with Ruby, you will likely see this in other programming languages. Try this on your own if you are curious.
*/

function bSearch1(arr, target) {
  if (arr.length === 0) return -1;

  const testIdx = Math.floor(arr.length / 2);
  const test = arr[testIdx];

  if (test === target) {
    return testIdx;
  } else if (test > target) {
    return bSearch1(arr.slice(0, testIdx), target);
  } else {
    const searchGreaters = bSearch1(arr.slice(testIdx + 1), target);
    return searchGreaters === -1 ? -1 : searchGreaters + (testIdx + 1)
  }
}

function bSearch2(arr, target, min, max) {
  let dupeArr = arr.slice();
  if (min === undefined) min = 0;
  if (max === undefined) max = dupeArr.length - 1;

  let mid = Math.floor(((max - min)/ 2) + min);

  if (max <= min && dupeArr[mid] !== target) {
    return -1;
  } else if (dupeArr[mid] === target) {
    return mid;
  } else if (dupeArr[mid] > target) {
    return bSearch2(dupeArr, target, 0, mid);
  } else {
    return bSearch2(dupeArr, target, mid + 1, max);
  };
}

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log("bSearch1(arr, target, min, max)");
console.log("=================")
console.log("target: 6");
console.log(bSearch1(array1, 6));
console.log("=================")
console.log("target: 2");
console.log(bSearch1(array1, 2));
console.log("=================")
console.log("target: 10");
console.log(bSearch1(array1, 10));
console.log("=================")
console.log("target: 14");
console.log(bSearch1(array1, 14));
console.log("=================")

console.log("bSearch2(arr, target, min, max)");
console.log("=================")
console.log("target: 6");
console.log(bSearch2(array1, 6));
console.log("=================")
console.log("target: 2");
console.log(bSearch2(array1, 2));
console.log("=================")
console.log("target: 10");
console.log(bSearch2(array1, 10));
console.log("=================")
console.log("target: 14");
console.log(bSearch2(array1, 14));
console.log("=================")

/*
mergesort(arr) - receives an array, returns a sorted copy of the array by implementing merge sort sorting algorithm
*/

console.log("mergeSort(array)");

function merge(left, right) {
  let merged = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      merged.push(left.shift());
    } else {
      merged.push(right.shift());
    }
  }
  return [...merged, ...left, ...right];
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array
  } else {
    let leftSlice = array.slice(0, array.length / 2);
    let rightSlice = array.slice((array.length / 2))
    let left = mergeSort(leftSlice);
    let right = mergeSort(rightSlice);
    return merge(left, right);
  }
}

console.log(mergeSort([4, 1, 7, 4, 9, 1, 10, 3, 0, 5]));


/*
subsets(arr) - receives an array, returns an array containing all the subsets of the original array
*/

console.log("subsets(arr)");

function subsets(arr) {
  if (!arr.length) return [[]];

  const first = arr[0];
  const rest = subsets(arr.slice(1));

  const together = rest.map(subset => [first].concat(subset));

  return rest.concat(together);
}

console.log(subsets([1, 3, 5]));
console.log((subsets(['s', 'h', 'i', 't'])));


/*
Recap
As you may have noticed, recursion works much the same in JavaScript as in Ruby.
Which is to say, it sucks ass! Ugh!
*/