function maxInArray(numbers){
  let largest = numbers[0];
  for(let i = 0; i<numbers.length; i++){
    let element = numbers[i];
    if(element > largest){
      largest = element
    }
  }
  return largest;
}
const numbers = [44,55,67,98,520,547,202,54,208,874];
const maximum = maxInArray(numbers);
console.log(maximum);