// Assignment Code
var generateBtn = document.querySelector("#generate"); //This is clicking generate button button

//define variables for uppercase, lowercase, number, speical character, empty possible character string
let upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let characters = ["!", "@", "#", "$", "%", "^", "&", "*", "."];


// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //undefined
  var passwordText = document.querySelector("#password"); //undefined text area

  passwordText.value = password;
  function generatePassword() {
    //prompt for password length (8-128)
    var passwordLength = window.prompt("Choose a length betwee 8-128 characters");
    if (passwordLength < 8 || passwordLength > 128) {
      window.alert("You must pick a number between 8 and 128.")
      return generatePassword(); // this starts it again from top
    } else if (isNaN(passwordLength)) { //user didnt type in a number
      window.alert("must be a number")
      return generatePassword();
    }//checking if not a number
    var passwordLower = window.confirm("do you want to include lower case characters?")
    var passwordUpper = window.confirm("do you want to include upper case characters?")
    var passwordNumber = window.confirm("do you want to include a number?")
    var passwordCharacters = window.confirm("do you want to include a special characters?")
    //confirm for lowercase
    //confirm for uppercase
    //confirm for number
    //confirm for special character (y/n)
    if (passwordLower === false && passwordUpper === false && passwordNumber === false && passwordCharacter === false) {
      window.alert("select at least one character type")
      return generatePassword();
    }
    //validation for confirms
    //randomization function 
    function randomization(array) { //placeholder for array pass through
      var index = Math.floor(Math.random() * array.length)//picks random number off array length
      var character = array[index] //picking character at tht index
      return character;
    }
    // 3 variables that are empty arrays
    var possibleCharacters = [];
    var requiredCharacters = [];
    var password = [];
    //1. possible characters
    //2. required characters - get one of each character type
    //3. actual password result- random selection possible and required character based off length they choose
    if (passwordLower === true) {
      possibleCharacters = possibleCharacters.concat(lower) //stiching 2 arrays together reassign characters to new array
      requiredCharacters.push(randomization(lower)) //selecting  one character from arry
    }
    if (passwordUpper === true) {
      possibleCharacters = possibleCharacters.concat(upper) //stiching 2 arrays together reassign characters to new array
      requiredCharacters.push(randomization(upper))
    }

    if (passwordNumber === true) {
      possibleCharacters = possibleCharacters.concat(number) //stiching 2 arrays together reassign characters to new array
      requiredCharacters.push(randomization(number))
    } 
    
    if (passwordCharacters === true) {
      possibleCharacters = possibleCharacters.concat(characters) //stiching 2 arrays together reassign characters to new array
      requiredCharacters.push(randomization(characters))
    }
   
    //repeat for , number, and special *****
    // 4 if statements (if upper=== true) push to possible characters array. push required characters
    // 2 for loops, pick from random characters and push to password array
    for (let i = 0; i < passwordLength; i++) {
      var character = randomization(possibleCharacters)
      password.push(character)
    }
    // 1. pick from possible characters [loop through ex: 8 times] and push to actual password array
    // 2. loop through required characters , push required characters to actual password
    return password
  }
  for (let i = 0; i < passwordLength; i++) {
    var character = randomization(requiredCharacters)
    password.push(character)
  }
  return password }



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

