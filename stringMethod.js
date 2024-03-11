// toLowerCase, toUpperCase, includes, startsWith, endsWith, split,join
const userName = 'blacKpink';
const userInput = 'blackPink';

if(userName.toLowerCase() === userInput.toLowerCase()){
  console.log('Welcome');
}

// includes
const lyrics = 'There is a girl under the tree';
console.log(lyrics.includes('There'));

// startsWith
console.log(lyrics.startsWith('There'));
// endsWith
console.log(lyrics.endsWith('tree'));
// split
const newLyrics = lyrics.split(' ');
const lyricsJoin = newLyrics.join(' ');
console.log(lyricsJoin);

if(lyrics.indexOf('girl') !== -1){
  console.log('element exist inside the str');
}
else{
  console.log('element is not exist inside the str');
}