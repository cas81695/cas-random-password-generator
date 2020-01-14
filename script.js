
// The variables of each function, the strings attached to each function and the objects used for the password

var specialCharacters = "!@#$%^&*()-_=+/";
var numbers = "0123456789";
var lowerCase = "abcdefghijklmnopqurstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var yourPassword = document.getElementById ("yourPassword");

var submit = document.getElementById("submit");

var charNumber = document.getElementById("charNumber");


var characters = "";

// User inputs the options of including of numbers.

function answerNumbers() {
    var numbersYes = confirm("Would you like to have numbers in your password?");
    if (numbersYes == true) {
        characters = characters + numbers;
    }
}

answerNumbers();

// User inputs the option of including upper case letters.

function answerUpperCase() {
    var upperYes = confirm("Would you like to have upper case letters in your password?");
    if (upperYes == true) { 
        characters = characters + upperCase;
    }
}

answerUpperCase ();

// User inputs the option of including lower case letters.

function answerLowerCase() {
    var lowerYes = confirm("Would you like to have lower case letters in your password?");
    if (lowerYes == true) {
        characters = characters + lowerCase; 
    }
}

answerLowerCase ();

// User inputs the option of including special characters.

function answerSpecialCharacters() {
    var specialCharactersYes = confirm("Would you like to have special characters in your password?");
    if (specialCharactersYes == true) {
        characters = characters + specialCharacters;
    }
}
answerSpecial ();


// The user selects the length of the password based on the limits placed on html.  

function password(length, characters) {
    var Password = "";
    for(var i=0; i<length; i++) {
        Password = Password + characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return Password;
}

// The user's choices result in password generated by the given values

function clickSubmit() {
    yourPw.value = password(charNumber.value, characters);
}

// The user has the password copied onto clipboard

function clickCopy() {
    var copyText = document.getElementById("yourPassword")
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the Password: " + copyText.value);

}