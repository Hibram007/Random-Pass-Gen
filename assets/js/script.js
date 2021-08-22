// Assignment code here

// Define/layout what the input variables are: 
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

// Variable values= character types to select from: 

// Special characters -- others are self explanatory
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

space = [];

// Choices declared outside the if statement so they can be concatenated upon condition
var choices;
// converts letters to uppercase 
var toUpper = function (x) {
    return x.toUpperCase();
};

//Refence Mdn for uppercase - unfamiliar

// solution- "creates a variable for uppercase conversion"
alpha2 = alpha.map(toUpper);

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function () {
    pg = generatePassword();
    document.getElementById("password").placeholder = pg;
});
 

// Start function- run gen- password
function generatePassword() {
  // Asks for user input
  enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
  // Check against user not giving any info - falsy check
  if (!enter) {
      alert("This needs a value");
      //range for character length
  } else if (enter < 8 || enter > 128) {
      // Validates user input

      // First input prompt- starts process
      enter = parseInt(prompt("You must choose between 8 and 128"));

  } else {
      // THis is validation section - means to check on 
      confirmNumber = confirm("Will this contain numbers?");
      confirmCharacter = confirm("Will this contain special characters?");
      confirmUppercase = confirm("Will this contain Uppercase letters?");
      confirmLowercase = confirm("Will this contain Lowercase letters?");
  };

  // Else if for 4 negative options- 
  if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
    //this is the safety check to make sure input is given
      choices = alert("You must choose a criteria!");

  }
  // conditionals that determine choices

  // options for 4 positive options- if user says yes to all criteria
  else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

      choices = character.concat(number, alpha, alpha2);
  }
  // opts for 3 positive options
  else if (confirmCharacter && confirmNumber && confirmUppercase) {
      choices = character.concat(number, alpha2);
  }
  else if (confirmCharacter && confirmNumber && confirmLowercase) {
      choices = character.concat(number, alpha);
  }
  else if (confirmCharacter && confirmLowercase && confirmUppercase) {
      choices = character.concat(alpha, alpha2);
  }
  else if (confirmNumber && confirmLowercase && confirmUppercase) {
      choices = number.concat(alpha, alpha2);
  }
  // option for 2 positive options 
  else if (confirmCharacter && confirmNumber) {
      choices = character.concat(number);

  } else if (confirmCharacter && confirmLowercase) {
      choices = character.concat(alpha);

  } else if (confirmCharacter && confirmUppercase) {
      choices = character.concat(alpha2);
  }
  else if (confirmLowercase && confirmNumber) {
      choices = alpha.concat(number);

  } else if (confirmLowercase && confirmUppercase) {
      choices = alpha.concat(alpha2);

  } else if (confirmNumber && confirmUppercase) {
      choices = number.concat(alpha2);
  }
  // Else if for 1 positive option
  else if (confirmCharacter) {
      choices = character;
  }
  else if (confirmNumber) {
      choices = number;
  }
  else if (confirmLowercase) {
      choices = alpha;
  }
  // Created space variable to fill uppercase conversion
  else if (confirmUppercase) {
      choices = space.concat(alpha2);
  };

 // password variable is an array placeholder for user generated amount of length
 var password = [];

 // Section to add randomness - look at last two sections of mod.3

 // Random selection for all variables: -- math random and math floor / ceiling will come into play
 for (var i = 0; i < enter; i++) {
     var pickChoices = choices[Math.floor(Math.random() * choices.length)];
     //pushes data into array
     password.push(pickChoices);
 }
 // joins the password array and converts it to a string - mdn insipired "join is new"
 var pg = password.join("");
 UserInput(pg);
 return pg;
}
// This puts the password value into the textbox

//modified to all textcontent
function UserInput(pg) {
  //this will give us text 
 document.getElementById("password").textContent = pg;

}

