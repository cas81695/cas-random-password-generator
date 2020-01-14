
var special = "!@#$%^&*()-_=+/";
var numeric = "0123456789";
var lower = "abcdefghijklmnopqurstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var charNum = document.getElementById("charNum")
var submit = document.getElementById("submit")
var yourPassword = document.getElementById ("yourPassword")

function answerNumeric() {
    var numericYes = confirm("Would you like to include numbers?")
    if (numericYes == true) {
        characters = characters + numeric;
    }
}

}

function answerUpper() {
    var upperYes = confirm("Would you like to inlcude upper case letters?")
    if (upperYes == true) { 
        characters = characters + upper;
    }
}

function answerLower() {
    var lowerSet = confirm("Would you like to include lower case letters?")
    if (lowerSet == true) {
        characters = characters + lower; 
    }
}


function answerSpecial() {
    var specialYes = confirm("Would you like to include special characters?")
    if (specialYes == true) {
        characters = characters + special
    }
}

function clickSubmit() {
    yourPassword.value = Password(charNum.value, characters);
}

function password(length, characters) {
    var password = "";
    for(var i=0; i<length; i++) {
        password = password + characters.charAt(Math.floor(Math.random() * characters.length));
    }
}




        function randomize(length) {
            for (let i = 0; i <= length; i++) {
                passwordResult += charsConfirmed.charAt(
                    Math.floor(Math.random() * passwordLength)
                );
            }
            return passwordResult;
        }
        document.getElementById("password").innerHTML = randomize(userSize -1)
    }

    



}