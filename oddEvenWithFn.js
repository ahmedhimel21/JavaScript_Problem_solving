function isEven(number){
  const reminder = number % 2;
  if(reminder === 0){
    console.log(number, 'IS even');
  }
  else{
    console.log(number, 'Is odd');
  }
}
const number = 8;
isEven(number);