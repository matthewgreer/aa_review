Array.prototype.myEach = function(callback) {

  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }

  return undefined;

};

// const arr1 = [1, 5, 10, 20, 100];
// const arr2 = ['cat', 'bird', 'hippo'];
// const cb1 = function(num) {
//   return num + 5;
// };
// const cb2 = function(str) {
//   return (`the ${str} ate my nuts`);
// };
// const cb3 = function(acc, num) {
//   return acc * num;
// };
// const cb4 = function(acc, num) {
//   return acc + num;
// };

// console.log(arr1.myEach(cb1));
// console.log(arr2.myEach(cb2));

Array.prototype.myMap = function(callback) {
  
  let newArray = [];

  this.myEach((el) => {
    newArray.push(callback(el));
  })

  return newArray;

};

// console.log(arr1.myMap(cb1));
// console.log(arr2.myMap(cb2));

Array.prototype.myReduce = function(callback, initialValue) {
  
  let reducerArray = this.slice();
  let accumulator = initialValue ? initialValue : reducerArray.shift();
  
  reducerArray.myEach((el) => {
    accumulator = callback(accumulator, el); 
  })

  return accumulator;

}

// console.log(arr1.myReduce(cb4));
// console.log(arr1.myReduce(cb4, 12));
// console.log(arr1.myReduce(cb3));
// console.log(arr1.myReduce(cb3, 4));