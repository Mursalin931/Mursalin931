
var wonGame = 0;
var lostGame = 0;

for (i = 0; i <= 4; i++) {

    var gussingNumber = parseInt(prompt("Enter The Number 1 to 5 "))

    var randomNumber = Math.floor(Math.random() * 5) + 1;

    if (gussingNumber === randomNumber) {

        console.log("You Have Won the Game :) ")
        wonGame++;

    }
    else {

        console.log("You Have Lost (: ")
        lostGame++;

    }
}

document.write("You Have WON : "+wonGame +"</br>")
document.write("You Have LOST : "+lostGame)