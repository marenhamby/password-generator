// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword() {
  // Added prompt and confirms to gather needed information about the password and 
  // then use that to indicate what should be added to the array of arrays used to generate the password.

  var numberOfCharacters = prompt("How many characters would you like in your password? Please select a number 8 through 128.")    
  var entry = parseInt(numberOfCharacters)  
  console.log(typeof entry != Number)
  if (entry < 8 || entry > 128) {
      alert ("Please enter a number between 8 and 128.");
      generatePassword();
  }
    
  // **Prompt added for length and confirm statements added for the other 
  // types of criteria (lowercase, uppercase, number, symbol).

  var desiredLength = entry
  console.log(desiredLength)
    
  var userWantsLower = confirm("Would you like your password to include lowercase letters?")
  console.log(userWantsLower)

  var userWantsUpper = confirm("Would you like your password to include uppercase letters?")
  console.log(userWantsUpper)

  var userWantsNumber = confirm("Would you like your password to include numbers?")
  console.log(userWantsNumber)
  
  var userWantsSymbol = confirm("Would you like your password to include symbols?")
  console.log(userWantsSymbol)
  
  // **Added new variables with arrays for possible characters to be added to password.
  
  var possibleCharacters = []
  var arrayOfLowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var arrayOfUppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  var arrayOfNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  var arrayOfSymbols = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]
  
  
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



    var password = "";
    console.log(desiredLength)
    for (var i=0; i < desiredLength; i++) {
      var charset = possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)];
      var char = charset[Math.floor(Math.random() * charset.length)];
      password += char;
      console.log(password)
    }
    return password;
  
  }

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
