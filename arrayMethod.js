// concat, slice, splice, checkArray, 

// concat
const number = [1,3,5,7,9];
const chars = ['a', 'b', 'c', 'd','e'];
const newArr = number.concat(chars);
console.log(newArr); 
// slice, splice, checkArray
const fruits = ['mango', 'apple', 'guava', 'watermelon'];
console.log(fruits.slice(0,3));
console.log(fruits.splice(0,2));
console.log(Array.isArray(fruits));