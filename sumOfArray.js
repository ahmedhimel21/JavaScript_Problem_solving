function sumOfArray(numbers){
  let sum = 0;
  for(let i = 0; i <numbers.length; i++){
    let element = numbers[i];
    sum = sum + element;
  }
  return sum;
}
const numbers = [44,54,78,98,56,25,24,36];
const sum = sumOfArray(numbers);
console.log(sum);