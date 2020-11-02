// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// **Prompt added for length and confirm statements added for the other 
// types of criteria (lowercase, uppercase, number, symbol).

var numberOfCharacters = prompt("How many characters would you like in your password? Please select a number 8 through 128.")
  
  if (numberOfCharacters !== Number) {
    alert ("Please enter a number.")
  }
  
  if (numberOfCharacters < 8 || numberOfCharacters > 128) {
    alert ("Please enter a number between 8 and 128.")
  }
  
var includeLower = confirm("Would you like your password to include lowercase letters?")

var includeUpper = confirm("Would you like your password to include uppercase letters?")

var includeNumbers = confirm("Would you like your password to include numbers?")

var includeSymbols = confirm("Would you like your password to include numbers?")


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
