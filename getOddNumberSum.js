function getSumOfOddNumbers(numbers){
  let sum = 0;
  for(let i = 0; i<numbers.length; i++){
    let number = numbers[i];
    if(number % 2 === 1){
      sum = sum + number;
    }
  }
  console.log(sum);
}
const numbers = [24,21,23,25,28,98,77,55,50];
getSumOfOddNumbers(numbers);