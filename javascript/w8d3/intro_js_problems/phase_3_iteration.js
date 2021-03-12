// bubble sort

Array.prototype.bubbleSort = function() {
  let sorted = false;
  do {
    sorted = true;
    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] > this[i + 1]) {
        [this[i], this[i + 1]] = [this[i + 1], this[i]];
        sorted = false;
      }
    }
  } while (!sorted);
  return this;
};

// let arr1 = [4, 1, 7, 2, 5, 12, 3, 1, 7, 3];
// console.log(arr1.bubbleSort());



// substrings

String.prototype.substrings = function() {
  const subs = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j <= this.length; j++) {
      subs.push(this.slice(i, j));
    }
  }
  return subs;
}

// let str1 = "bananarama";
// let str2 = "thebangles";
// console.log(str1.substrings());
// console.log(str2.substrings());