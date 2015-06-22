var input = prompt('Enter any word that you want:');

var numberChars = input.length;
var thirdChar = input.charAt(2);
var lower = input.toLowerCase();
var upper = input.toUpperCase();
var subword = input.substring(1,4);

alert('You entered: ' + input + '\nThere are ' + numberChars +
      ' characters in the word \nThe third character is ' + thirdChar +
      '\nLowercase: ' + lower + '\nUppercase: ' + upper +
      '\nExample: I like ' + input + ' in the morning. \nSubword: ' + subword);