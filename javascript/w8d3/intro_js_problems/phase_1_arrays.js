Array.prototype.uniq = function() {
  const uniqArray = [];
  this.forEach((ele) => {
    if (!uniqArray.includes(ele)) uniqArray.push(ele);
  })
  return uniqArray;
};

// const arr1 = [1, 1, 2, 2, 2, 3, 4, 5, 5, 5];
// const arr2 = [];
// const arr3 = [9, "butt", "butt", "arse", 39];

// console.log(arr1.uniq());
// console.log(arr2.uniq());
// console.log(arr3.uniq());

Array.prototype.twoSum = function() {
  const sumToZero = [];
  for (let i = 0; i < this.length - 1; i ++) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) sumToZero.push([this[i], this[j]]);
    }
  }
  return sumToZero;
};

const arr4 = [];
const arr5 = [1, 2, 3, 4, -1, -3, 0];
const arr6 = [1, 0, 4, -1, -3, 2, -2, 8];

console.log(arr4.twoSum())
console.log(arr5.twoSum())
console.log(arr6.twoSum())


Array.prototype.transpose = function() {
  return this[0].map((_,colIdx) => this.map(row => row[colIdx]));
};

// const arr7 = [["A", "B", "C"], ["D", "E", "F"], ["G", "H", "I"]];
// const arr8 = [
//   ["A", "B", "C", "D"],
//   ["a", "b", "c", "d"]
// ];

// console.log(arr7.transpose());
// console.log(arr7);
// console.log(arr8.transpose());
// console.log(arr8);


// WALKTHROUGH OF arr8.transpose();
// ================================
// this[0] is arr8 at index 0, which is ["A", "B", "C", "D"]
// iterate & evaluate:
//  [
//   first element "A" (index 0) =>
//          this is arr8, which is [["A", "B", "C", "D"],["a", "b", "c", "d"]
//          iterate & evaluate:
//            [
//             ["A", "B", "C", "D"] => ["A", "B", "C", "D"] at index 0, so: "A"
//             ["a", "b", "c", "d"] => ["a", "b", "c", "d"] at index 0, so: "a"
//            ]
//   so "A" => ["A", "a"]
//   ,
//   second element "B" (index 1) =>
//          this is arr8, which is [["A", "B", "C", "D"],["a", "b", "c", "d"]
//          iterate & evaluate:
//            [
//             ["A", "B", "C", "D"] => ["A", "B", "C", "D"] at index 1, so: "B"
//             ["a", "b", "c", "d"] => ["a", "b", "c", "d"] at index 1, so: "b"
//            ]
//   so "B" => ["B", "b"]
//   ,
//   third element "C" (index 2) =>
//          this is arr8, which is [["A", "B", "C", "D"],["a", "b", "c", "d"]
//          iterate & evaluate:
//            [
//             ["A", "B", "C", "D"] => ["A", "B", "C", "D"] at index 2, so: "C"
//             ["a", "b", "c", "d"] => ["a", "b", "c", "d"] at index 2, so: "c"
//            ]
//   so "C" => ["C", "c"]
//   ,
//   fourth element "D" (index 3) =>
//          this is arr8, which is [["A", "B", "C", "D"],["a", "b", "c", "d"]
//          iterate & evaluate:
//            [
//             ["A", "B", "C", "D"] => ["A", "B", "C", "D"] at index 3, so: "D"
//             ["a", "b", "c", "d"] => ["a", "b", "c", "d"] at index 3, so: "d"
//            ]
//   so "D" => ["D", "d"]
//   ]
//   so arr8.transpose(); => [["A","a"],["B","b"],["C","c"],["D","d"]]

//  arr8
  //  [
  //    ["A", "B", "C", "D"],
  //    ["a", "b", "c", "d"]
  //  ];

// arr8.transpose();
  // [
  //   ["A", "a"],
  //   ["B", "b"],
  //   ["C", "c"],
  //   ["D", "d"],
  // ];


