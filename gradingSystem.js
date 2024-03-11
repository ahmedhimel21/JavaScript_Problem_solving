function gradingSystem(result) {
  if (result > 100) {
    console.log('Result can not be gater then 100');
  }
  else if(result <= 100 && result >=0){
    if(result >= 0 && result < 33){
      console.log('F');
    }
    else if(result >=33 && result < 50){
      console.log('D');
    }
    else if(result >=50 && result < 60){
      console.log('C');
    }
    else if(result >=60 && result < 70){
      console.log('A-');
    }
    else if(result >=70 && result < 80){
      console.log('A');
    }
    else{
      console.log('A+');
    }
  }
  else {
    console.log('Result can not be negative');
  }
}
const resultInput = 32;
gradingSystem(resultInput);