// target: I am a good boy -> boy good a am I.
function reverseWord(str){
  let words = str.split(' ');
  let reverse = [];
  for(let i = words.length-1; i >=0; i--){
    let element = words[i];
    reverse.push(element);
  }
  let reversed = reverse.join(' ');
  return reversed;
}
const strInput = 'Hello world';
const reversedWord = reverseWord(strInput);
console.log(reversedWord);