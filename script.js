
var special = "!@#$%^&*()-_=+/";
var num = "0123456789";
var lower = "abcdefghijklmnopqurstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var charNum = document.getElementById("charNum")
var submit = document.getElementById("submit")
var yourPassword = document.getElementById ("yourPassword")

var characters = "";

function answerNum() {
    var numYes = confirm("Would you like to include numbers?")
    if (numYes == true) {
        characters = characters + num;
    }
}

answerNum();

function answerUpper() {
    var upperYes = confirm("Would you like to inlcude upper case letters?")
    if (upperYes == true) { 
        characters = characters + upper;
    }
}

answerUpper ();

function answerLower() {
    var lowerSet = confirm("Would you like to include lower case letters?")
    if (lowerSet == true) {
        characters = characters + lower; 
    }
}

answerLower ();


function answerSpecial() {
    var specialYes = confirm("Would you like to include special characters?")
    if (specialYes == true) {
        characters = characters + special;
    }
}

answerSpecial ();

function clickSubmit() {
    yourPassword.value = Password(charNum.value, characters);
}

function password(length, characters) {
    var password = "";
    for(var i=0; i<length; i++) {
        password = password + characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
}

function clickCopy() {
    var copyText = document.getElementById("yourPassword")
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the Password" + copyText.value);

}