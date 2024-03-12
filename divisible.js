/*
target: show output 1-50
1. If the number divisible by 3 then instead of the number, show 'foo'.
1. If the number divisible by 5 then instead of the number, show 'bar'.
1. If the number divisible by 3 & 5 then instead of the number, show 'foobar'.
*/
for (let number = 1; number <= 50; number++) {
  if (number % 3 === 0 && number % 5 === 0) {
    console.log('foobar');
  }
  else if (number % 3 === 0) {
    console.log('foo');
  }
  else if (number % 5 === 0) {
    console.log('bar');
  }
  else {
    console.log(number);
  }
}
