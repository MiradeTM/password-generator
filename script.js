// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');
var uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var numbers = '1234567890'.split('');
var specialCharacters = '!"#$%&*(){}+,-./:;<=>?@[]^_`|~'.split('');
var length = prompt ('How many characters would you like your password to include?') ;
if(length<8 || length>128){
  alert('Please enter a number between 8 and 128.');
}

var password = {
  lowercaseLetters : 'abcdefghijklmnopqrstuvwxyz'.split(''),
  uppercaseLetters : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
  numbers : '1234567890'.split(''),
  specialCharacters : '!"#$%&*(){}+,-./:;<=>?@[]^_`|~'.split(''),
  length : prompt ('How many characters would you like your password to include?') ;
if(length<8 || length>128){
  alert('Please enter a number between 8 and 128.');
}
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


generateBtn.Click = confirm ('Do you want to include Uppercase letters?');
generateBtn.Click = confirm ('Do you want to use lowercase letters?');
generateBtn.Click = confirm ('Do you want to use numbers?')
generateBtn.Click = confirm ('Do you want to use special characters?');
generateBtn.Click = prompt ('How long do you want your password to be?'); 