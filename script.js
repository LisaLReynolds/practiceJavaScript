//Task 1: Write a function that takes an array of numbers and returns the sum of all numbers

//1. create an array
//2. create a function that has a loop to iterate over the array, adding each number to the previous sum
//3. when the loop gets to the end, stop and console.log the final sum

let thisArray = [1, 2, 3, 4];

function sumArray(thisArray) {
  let sum = 0; //sum is an accumulator variable that stores a running total
  for (let num of thisArray) {
    sum += num; //update operation (compound assignment) - adds the current iteration value (num) to the accumulator
  }
  return sum; //after the loop completes, the final accumulated value is returned
}

console.log(sumArray(thisArray)); //function is called with thisArray as parameter

// the pattern above is called Accumulation pattern
//used for sums, counts, building arrays, tracking max/min

//Task 2: Sum of Even Numbers
//Write a function that returns the sum of only the even numbers in an array
//1. create array
//2. create for...of loop to iterate over array
//3. create sum accumulator variable
//4. create conditional logic inside loop so only even numbers get added and odds get skipped

let secondArray = [1, 2, 3, 4, 5, 6];

function sumEvenNums(secondArray) {
  let sum = 0;

  for (let num of secondArray) {
    if (num % 2 === 0) {
      // if is conditional statement then boolean expression - checks for even numbers
      sum += num;
    }
  }

  return sum;
}

console.log(sumEvenNums(secondArray)); //12

//Task 3: Objects as Counters
//Write a function that returns how many times each number appears in an array

//array
//funcion that checks each number against the array for that same number and stores that number in an accumulator variable

let thirdArray = [1, 2, 2, 3, 1, 2];

function countNumbers(thirdArray) {
  const count = {}; //count is object (accumulator)

  for (let num of thirdArray) {
    count[num] = (count[num] || 0) + 1; //assignment expression
    //left side - where the value is stored, right side- the value being computed
  }

  return count;
}
//Objects in js automatically create properties when you assign a vlue to a new key
//so   count[1] = 1     if count[1] didn't exitst - js creates it automatically

console.log(countNumbers(thirdArray)); //{1:2, 2:3, 3:1}

//Task 4: First Unique Character
//given a string, return the first character that does NOT repeat

//Need to create two passes
//1. count frequency of each character
//2. scan again to find the first count of 1

let string1 = "beetcode";

function findFirstUnique(string1) {
  count = {};

  for (let char of string1) {
    //iterates over characters in the string - creates key value pairs in count object l:1 etc
    count[char] = (count[char] || 0) + 1;
  }

  for (let char of string1) {
    //scan over original string again to preserve "first" logic - the object (count) does not gurentee order, the string preserves the original order of characters
    if (count[char] === 1) {
      //the second loop uses the object as a lookup table
      return char;
    }
  }
  return null;
}

console.log(findFirstUnique(string1)); //b

// the code below contains a for...in loop as the second loop

function testForIn(string1) {
  count = {};

  for (let char of string1) {
    //populates count object with key value pairs
    count[char] = (count[char] || 0) + 1;
  }

  for (let key in count) {
    // for...in iterates over object keys (but original string order is not gurenteed, so not a good use for the original task)
    if (count[key] === 1) {
      //checking that key === 1
      return key;
    }
  }
}

console.log(testForIn(string1)); // still shows b, but not a reliable way to complete the original task of finding the first character in the string that does not repeat

//Use for...of when order matters
//Use for...in when you need to examine object keys

//Task 6: sum all numbers in an array

let array4 = [1, 2, 3];

function func1(array4) {
  let sum = 0;
  for (let num of array4) {
    sum += num;
  }
  return sum;
}

console.log(func1(array4)); //6

//or with long version loop that does the exact same thing with different syntax

function func2(array4) {
  let sum = 0;
  for (let i = 0; i < array4.length; i++) {
    sum += array4[i];
  }
  return sum;
}

console.log(func2(array4)); //6

//Task 7: Count numbers in an array

let array5 = [1, 1, 2, 3];

let countChar = {};

for (let char of array5) {
  countChar[char] = (countChar[char] || 0) + 1;
}

console.log(countChar); //{1: 2, 2: 1, 3: 1}

//Task 8: conditionals inside loops

const arr = [2, 4, 6, 7];

for (let num of arr) {
  if (num % 2 !== 0) {
    console.log(num); //7
    break;
  }
}
//finds first odd number
