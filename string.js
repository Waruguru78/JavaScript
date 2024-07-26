// String manipulation function
// 1 . function to reverse a string.

function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString('hello'));

// 2. Count characters

function countCharacters(word) {
    return word.length;
}

console.log(countCharacters('hello'));

// 3. Capitalize words.
function capitalize(words) {
    return words
    .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

console.log(capitalize('hello world')); 
