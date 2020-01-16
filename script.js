
// The variables of each function, the strings attached to each function and the objects used for the password

var special = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+","/"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var yourPassword = document.getElementById ("yourPassword");

var submit = document.getElementById("clickSubmit");

var characterNum = "";

var characters = "";


// User inputs the options of including of numbers.

function answerCharacterNum() {
    var characterNum = Number(prompt("Enter the length of your password between 8 and 128?"));
    if (characterNum > 8 || characterNum < 128); 
    }

function answerNumbers() {
    var numbersYes = confirm("Would you like to have numbers in your password?");
    if (numbersYes == true) {
        characters = characters + numbers;
    }
}


// User inputs the option of including upper case letters.

function answerUpperCase() {
    var upperCaseYes = confirm("Would you like to have upper case letters in your password?");
    if (upperCaseYes == true) { 
        characters = characters + upperCase;
    }
}


// User inputs the option of including lower case letters.

function answerLowerCase() {
    var lowerCaseYes = confirm("Would you like to have lower case letters in your password?");
    if (lowerCaseYes == true) {
        characters = characters + lowerCase; 
    }
}


// User inputs the option of including special characters.

function answerSpecial() {
    var specialCharactersYes = confirm("Would you like to have special characters in your password?");
    if (specialCharactersYes == true) {
        characters = characters + special;
    }
}


// The user's choices result in password generated by the given values

function clickSubmit() {

    answerCharacterNum ();
    answerNumbers ();
    answerUpperCase ();
    answerLowerCase ();
    answerSpecial ();
    yourPassword.value = password(characterNum.value, characters);
   
}

function password(length, characters) {
    var password = "";
    for(var i = 0; i < length; i++) {
        password = password + characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
}


// The user has the password copied onto clipboard

function clickCopy() {
    var copyText = document.getElementById("yourPassword")
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the Password: " + copyText.value);

}