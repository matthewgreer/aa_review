function madLib(verb, adj, noun) {
  return `We shall ${verb} the ${adj} ${noun}!`;
}

// console.log(madLib("imprison", "seditious", "Republicans"));

function isSubstring(searchString, subString) {
  return searchString.includes(subString);
}

// console.log(isSubstring("time to program", 'time'));
// console.log(isSubstring("Jump for joy", "joys"));

function fizzBuzz(array) {
  const newArray = [];
  array.forEach(num => {
    if ((num % 3 === 0 || num % 5 === 0) && !(num % 3 === 0 && num % 5 === 0)) {
      newArray.push(num)
    }
  });
  return newArray;
}

// console.log(fizzBuzz([1, 3, 5, 6, 8, 30, 35, 36, 42]));
// console.log(fizzBuzz([1, 3, 5, 9, 11, 13, 15, 21, 22]));

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// console.log(isPrime(7));
// console.log(isPrime(1));
// console.log(isPrime(29));
// console.log(isPrime(2));
// console.log(isPrime(99));
// console.log(isPrime(-1));

function firstNPrimes(n) {
  const primes = [];
  let i = 2;
  while (primes.length < n ) {
    if (isPrime(i)) primes.push(i);
    i++
  }
  return primes;
}

function sumOfNPrimes(n) {
  return firstNPrimes(n).reduce((a, b) => a + b, 0);
}

// console.log(sumOfNPrimes(0));
// console.log(sumOfNPrimes(1));
// console.log(sumOfNPrimes(4));