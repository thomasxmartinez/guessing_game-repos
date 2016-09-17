'use strict';
var userName = prompt ('What\'s your name?');
alert('Welcome to my site' + ' ' + userName);

var answerOne = prompt('Was I under 10 years old when I first moved here?').toLowerCase();

if (answerOne === 'y' || answerOne === 'yes') {
  alert('You know me so well');
} else {
  alert('stranger danger');
}

var answerTwo = prompt('Was I was ever in Qatar?').toLowerCase();

if (answerTwo === 'yes' || answerTwo === 'y') {
  alert('Nice');
} else {
  alert('I would read that again');
}

var answerThree = prompt('Was I in Fl for more than two years?').toLowerCase();

if (answerThree === 'y' || answerThree === 'yes') {
  alert('you did it! you can read');
} else {
  alert('this is about me, not about anyone else');
}

var answerFour = prompt('Was I born a Mammal?').toLowerCase();

if (answerFour === 'yes' || answerFour === 'y') {
  alert('Yes yes yes');
} else if (answerFour === 'no' || questionFour === 'n') {
  alert('So you think I am cold blooded?');
} else {
  alert('please reply with yes,no,Y or N');
}

var answerFive = prompt('Was I born in WA?').toLowerCase();

if (answerFive === 'yes' || answerFive === 'y') {
  alert('You should probably read again ');
} else if (answerFive === 'no' || answerFive === 'n') {
  alert('Nice!');
} else {
  alert('please reply with yes,no,Y or N');
}

var answerSix = prompt('Name a location I have mentioned').toLowerCase();
var myArray = ['washington','florida','qatar','los angeles','arizona'];
if (myArray.indexOf(answerSix) === -1) {
  alert('You seem to be losing the guessing game');
} else {
  alert('winner winner chicken dinner');
}

var answerSeven = prompt('What came first the ------- or the ---?').toLowerCase();
var saidArray = ['chicken','egg','rhinocerous'];
if (saidArray.indexOf(answerSeven) === -1) {
  alert('I didn\'t necessarily expect you to get this' );
} else {
  alert('stop reading my mind');
}
var myNumber = 9;

do {
  console.log(myNumber);
  var answerEight = prompt('Pick a number 1 through 10');
  if (answerEight < myNumber) {
    alert('too low');
  } else if (answerEight > myNumber) {
    alert('too high');
  } else {
    alert('got em coach');
  }
}
  while (answerEight != myNumber);
