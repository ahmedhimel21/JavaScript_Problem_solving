function leapYear(year){
  if(year % 4 === 0){
    console.log(year, 'is a leap year');
  }
  else{
    console.log(year, 'year is not a leap year');
  }
}
leapYear(2025);