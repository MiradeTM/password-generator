// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');
var uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var numbers = '1234567890'.split('');
var specialCharacters = '!"#$%&*(){}+,-./:;<=>?@[]^_`|~'.split('');
/*if(length<8 || length>128){
  alert('Please enter a number between 8 and 128.');
}*/

var allArr = [];
var passwordArr = [];
function generatePassword () {
var lengthOption = prompt ('How long do you want your password to be?'); 
var upperOption = confirm ('Do you want to include Uppercase letters?');
var lowerOption = confirm ('Do you want to use lowercase letters?');
var numberOption = confirm ('Do you want to use numbers?')
var specialOption = confirm ('Do you want to use special characters?');

if (upperOption) {
  allArr = allArr.concat(uppercaseLetters)
}
if (lowerOption) {
  allArr = allArr.concat(lowercaseLetters)
}
if (numberOption) {
  allArr = allArr.concat(numbers)
}
if (specialOption) {
  allArr = allArr.concat(specialCharacters)
}



for (var i = 0; i < lengthOption; i++) {
  //it will pick one random letter from allArr and push it to passwordArr  
 var selectedChar = allArr[Math.floor(Math.random () * allArr.length)];
 passwordArr.push(selectedChar);
}
return passwordArr.join('');
}
// Write password to the #password input
function writePassword() {

 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener('click', writePassword);
