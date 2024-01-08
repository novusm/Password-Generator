// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function givePasswordOptions() {
  var passwordOptions = {};

  // Prompt for the length of the password
  var length = parseInt(prompt("Enter the length of the password (between 8 and 128 characters):"));

// Prompting user until the correct length of password is entered
  while (isNaN(length) || length < 8 || length > 128) {
    alert("Invalid length. Please enter a number between 8 and 128.");
    length = parseInt(prompt("Enter the length of the password (between 8 and 128 characters):"));
  }

  passwordOptions.length = length;

  // Prompt for different character types
  passwordOptions.includeLowercase = confirm("Include lowercase characters?");
  passwordOptions.includeUppercase = confirm("Include uppercase characters?");
  passwordOptions.includeNumeric = confirm("Include numeric characters?");
  passwordOptions.includeSpecial = confirm("Include special characters?");

  // Check for if character type is selected
  if (!(passwordOptions.includeLowercase || passwordOptions.includeUppercase || passwordOptions.includeNumeric || passwordOptions.includeSpecial)) {
    alert("You must select at least one character type.");
    return null;
  }

  return passwordOptions; // Return the options object
}


// Function for getting a random element from an array
function getRandom(arr) {
  if (arr.length === 0) {
    return null;
  }

  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}


// Function to generate password with user input
function generatePassword() {
  var options = givePasswordOptions();
  if (!options) {
    // User cancelled or provides invalid input
    return "";
  }

  // Create an array to store characters to choose from based on user criteria
  var storeCharactersToUse = [];

  if (options.includeLowercase) {
    storeCharactersToUse = storeCharactersToUse.concat(lowerCasedCharacters);
  }

  if (options.includeUppercase) {
    storeCharactersToUse = storeCharactersToUse.concat(upperCasedCharacters);
  }

  if (options.includeNumeric) {
    storeCharactersToUse = storeCharactersToUse.concat(numericCharacters);
  }

  if (options.includeSpecial) {
    storeCharactersToUse = storeCharactersToUse.concat(specialCharacters);
  }

  var generatedPassword = "";
  for (var i = 0; i < options.length; i++) {
    var randomChar = getRandom(storeCharactersToUse);
    generatedPassword += randomChar;
  }

  return generatedPassword;
}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);