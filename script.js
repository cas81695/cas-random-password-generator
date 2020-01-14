
var special = "!@#$%^&*()-_=+/";
var numeric = "0123456789";
var lower = "abcdefghijklmnopqurstuvwxyz"
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

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

function answer() {

}

    let passwordResult = ""
    let charsConfirmed = "";

    if (userSize < 8 || userSize > 128 || isNaN(userSize)) {
        alert("You must enter a valid number");
        return;

    }
    if (specialOption) {
        charsConfirmed += specialSet;
    }

    if (numericOption) {
        charsConfirmed += numericSet;
    }

    if (lowerOption) {
        charsConfirmed += numericSet;
    }
    if (upperOption) {
        charsConfirmed += numericSet;
    }

    else {
        if(charsConfirmed < 1) {
            alert("You must choose at least one option of character");
        }
        }
        passwordLenght = charsConfirmed.length;

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