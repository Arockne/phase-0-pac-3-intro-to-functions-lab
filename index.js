function shout(string) {
  return string.toUpperCase();
}
function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(shout(string));
}

function logWhisper(string) {
  console.log(whisper(string));
}

function sayHiToGrandma(string) {
  //if string is lower
    //return I can't hear you!
  //if string is uppercase
    //return YES INDEED!
  //if string is I love you, Grandma.
    //return I love you, too.
  if (string === whisper(string)) {
    return 'I can\'t hear you!';
  }
  if (string === shout(string)) {
    return 'YES INDEED!';
  }
  if (string === 'I love you, Grandma.') {
    return 'I love you, too.'
  }
}