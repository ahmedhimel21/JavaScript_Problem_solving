function add(n1,n2){
  if(typeof n1 !== 'number' || typeof n2 !== 'number'){
    return 'Please add a valid number'
  }
  return n1 + n2;
}
const addition = add(12,'15');
console.log(addition);