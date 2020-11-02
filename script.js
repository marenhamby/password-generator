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

// Added new variables for possible characters to be added to password.

var possibleCharacters = []
var arrayOfLowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var arrayOfUppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var arrayOfNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var arrayOfSymbols = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "####", "####", "^", "_", "`", "{", "|", "}", "~"]

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
