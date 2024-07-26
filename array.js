// Array Functions
// 1. Find maximum and minimum

function findMax(arr) {
    return Math.max(...arr);
}

console.log(findMax([1, 3, 5, 7, 9]));
function findMin(arr) {
    return Math.min(...arr);
}

console.log(findMin([1, 3, 5, 7, 9]));

// 2. Sum of array

function sum(array) {
    return array.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum([1, 2, 3, 4, 5]));

// 3. Filter  Array

function filterArray(arr, condition) {
    return arr.filter(condition);
}

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = filterArray(numbers, num => num % 2 === 0);
console.log(evenNumbers); 

