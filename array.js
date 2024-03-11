let numbers = [44,65,78,75,25,21,54];
// check array length
let arrayLength = numbers.length;
console.log(arrayLength);

// get element value by index
let getFirstEle = numbers[0];
console.log(getFirstEle);

// set element by index
let addElement = numbers[0] = 55;
console.log(addElement); 

// find index of element
let findIndex = numbers.indexOf(55);
console.log(findIndex);

// add an element in the last index
let addElementInTheLast = numbers.push(69);
console.log(numbers);

// remove last element
let removeLastEle = numbers.pop();
console.log(removeLastEle);

// add and remove an element in the first index
let addFirstEle = numbers.unshift(2);
let rmFirstEle = numbers.shift();

