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
