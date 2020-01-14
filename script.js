
var special = "!@#$%^&*()-_=+/";
var num = "0123456789";
var lower = "abcdefghijklmnopqurstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var charNum = document.getElementById("charNum");
var submit = document.getElementById("submit");
var yourPw = document.getElementById ("yourPw");

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
    var lowerYes = confirm("Would you like to include lower case letters?")
    if (lowerYes == true) {
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
    yourPw.value = password(charNum.value, characters);
}

function password(length, characters) {
    var pwd = "";
    for(var i=0; i<length; i++) {
        pwd = pwd + characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return pwd;
}

function clickCopy() {
    var copyText = document.getElementById("yourPw")
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the Password:" + copyText.value);

}