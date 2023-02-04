// Assignment code here
function generatePassword () {
  let length;
  let final;
  
  let passwordChoice = confirm("Do you want to specify your password length?");
  if (passwordChoice == true) {
    length = checkLength();
  } else length = 8;

  let characterChoice = characterType();

  final = makeid(length, characterChoice);
  return final;
  
} 

function characterType() {
  let lower = false; 
  let upper = false;
  let numbers = false; 
  let characters = false;
  
  let lowerCase = confirm("Do you want to include lowercase characters?");
  if (lowerCase == true) {
    lower = true; 
  };
  
  let upperCase = confirm("Do you want to include uppercase characters?");
  if (upperCase == true) {
    upper = true; 
  }
  let numbersCase = confirm("Do you want to include numbers characters?");
  if (numbersCase == true) {
    numbers = true; 
  }
  let specialCase = confirm("Do you want to include special characters?");
  if (specialCase == true) {
    characters = true; 
  }

  if ((lower==false && upper==false) && (numbers==false && characters==false)) {
    alert("Please choose a character type!");
    characterType();
  }

  return [lower,upper,numbers,characters];
  
  }

function checkLength () {
  let passwordLength = prompt("Please choose a length that is at least at least 8 characters and no more than 128 characters.");
  if (passwordLength < 8) {
    alert("Please choose a password that is at least 8 characters.");
    checkLength();
  }
  if (passwordLength > 128) {
    alert("Please choose a password no more than 128 characters.");
    checkLength();
  } else return passwordLength;
}

function makeid(length, [lower,upper,number,characters]) {
  let result = '';
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const symbols = '!@#$=%^&*?'
  for (let i = 0; i < length; i++) {
    
  }

  // const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  //passes generatePassword function to variable password

  var passwordText = document.querySelector("#password");
  // identifies password text in document and calls it passWord Text

  passwordText.value = password;
  // sets the value to password

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
