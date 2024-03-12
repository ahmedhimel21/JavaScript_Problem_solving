// reverse string: I am a good boy. -> yob doog a ma I.
function reverseString(text){
  let reverse = '';
  for(let i =text.length-1; i >=0; i--){
    let element = text[i]
    reverse = reverse + element;
  }
  return reverse;
}
const textInput = 'I am a good boy';
const reverseStr = reverseString(textInput);