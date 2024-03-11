//break example: 1
for(let i =1; i<=10; i++){
  // console.log(i);
  if(i >5){
    break;
  }
}
//break example:2
let items = ['mouse', 'keyboard', 'lighter','phone'];
for(let i = 0; i<items.length; i++){
  let item = items[i];
  if(item === 'lighter'){
    break;
  }
  // console.log(item);
}

// continue(skip)
let numbers = [44,51,45,75,10,452,14,104,302,784,2];
for(let i = 0; i<numbers.length; i++){
  let number = numbers[i];
  if(number >100){
    continue;
  }
  console.log(number);
}