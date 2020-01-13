
const specialSet = "!@#$%^&*()-_=+/";
const numericSet = "0123456789";
const lowerSet = "abcdefghijklmnopqurstuvwxyz"
const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"


function generate () {
    let userInput = prompt("Please enter in a number that is between 8 and 128 for the length");
    let userSize = parseInt(userInput)
    let specialOption = confirm("Would you like your password to have special characters?");
    let numericOption = confirm("Would you like your password to have numbers?");
    let lowerOption = confirm("Would you like lower case letters in your password?");
    let upperOption = confirm("Would you like upper case letters in your psassword?");

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