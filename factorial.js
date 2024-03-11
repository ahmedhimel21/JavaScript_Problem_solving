// factorial: 4! = 4*3*2*1
function factorial(number){
  let factorial = 1;
  for(let i = number; i > 1; i--){
    factorial = factorial * i;
  }
  return factorial;
}
const number = 4;
const factorialResult = factorial(number);
console.log(factorialResult);