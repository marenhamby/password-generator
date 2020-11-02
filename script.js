// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// **List of functions used to generate a random value for each of the 
// types of criteria (lowercase, uppercase, number, symbol).

function getLower () {
  return String.fromCharCode(Math.floor(Math.random()*26) + 97);
}

function getUpper () {
  return String.fromCharCode(Math.floor(Math.random()*26) + 65);
}

function getNumber () {
  return String.fromCharCode(Math.floor(Math.random()*10) + 48);
}

function getSymbol () {
  var symbolList=[" ", "!", "U+0022", "#", "$", "%", "&", "U+0027", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "U+005C", "]", "^", "_", "`", "{", "|", "}", "~",]
  return symbolList[Math.floor(Math.random()*symbolList.length)];
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
