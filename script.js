// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  
  // Added prompt and confirms to gather needed information about the password and 
  // then use that to indicate what should be added to the array of arrays used to generate the password.

  var numberOfCharacters = prompt("How many characters would you like in your password? Please select a number 8 through 128.")
    
    if (numberOfCharacters !== Number) {
      alert ("Please enter a number.")
    }
    else if (numberOfCharacters < 8 || numberOfCharacters > 128) {
      alert ("Please enter a number between 8 and 128.")
    }
    
  var desiredLength = parseInt(numberOfCharacters)
    
  var includeLower = confirm("Would you like your password to include lowercase letters?")
    if (true) {
      var userWantsLower = true
    }
  
  var includeUpper = confirm("Would you like your password to include uppercase letters?")
    if (true) {
      var userWantsUpper = true
    }
  
  var includeNumbers = confirm("Would you like your password to include numbers?")
    if (true) {
      var userWantsNumber = true
    }
  
  var includeSymbols = confirm("Would you like your password to include numbers?")
    if (true) {
      var userWantsSymbol = true
    }
  
  // **Added new variables for possible characters to be added to password.
  
  var possibleCharacters = []
  var arrayOfLowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var arrayOfUppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  var arrayOfNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  var arrayOfSymbols = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "####", "####", "^", "_", "`", "{", "|", "}", "~"]
  
  
  
  // **Added if statements to add arrays that the user selects to the list of possible characters to be used.
  if (userWantsLower) {
    possibleCharacters.push(arrayOfLowercase);
  }
  
  if (userWantsUpper) {
    possibleCharacters.push(arrayOfUppercase);
  }
  
  if (userWantsNumber) {
    possibleCharacters.push(arrayOfNumbers)
  }
  
  if (userWantsSymbol) {
    possibleCharacters.push(arrayOfSymbols)
  }


  // **Prompt added for length and confirm statements added for the other 
  // types of criteria (lowercase, uppercase, number, symbol).
  
  
  
  function generatePassword() {
    var result = "";
    for (var i=0; i < desiredLength; i++) {
        var charset = possibleCharacters[Math.random() * possibleCharacters.length];
        var char = charset[Math.random() * charset.length];
        result += char;
    }
    return result;
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
