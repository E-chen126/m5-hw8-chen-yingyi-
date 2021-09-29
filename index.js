// Create an Array of at least 3 losing messages
const losingMessages = [
    "Losing is part of the game.", 
    "Let's try again!",
    "The more you lose, the more you want to win."
]

// Create variables to count wins and losses
var winsTotal = 0;
var lossesTotal = 0;

// Create variables that target elements with the following IDs: 'message', 'wins', 'losses'
var message = document.getElementById('message');
var wins = document.getElementById('wins');
var losses = document.getElementById('losses');


// target all .box elements and attach a click event listener to each one using a loop
var boxes = document.querySelectorAll('.box');
//console.log(boxes);

function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min)
}
const rndInt = randomIntFromInterval(1,3);

for(i=0; i<3; i++) {
    //console.log(i);
    boxes[i].addEventListener("click",function(){
        var getNumber = parseInt(this.textContent);
        if (getNumber === rndInt) {
            message.textContent = "Congratulation!You won!";
            winsTotal += 1;
            wins.innerHTML = "WINS:" + winsTotal
            losses.innerHTML = "LOSSES:" + lossesTotal
        } else {
            message.textContent = losingMessages[Math.floor(Math.random()*3)]
            lossesTotal += 1
            losses.innerHTML = "LOSSES:" + lossesTotal
            wins.innerHTML = "WINS:" + winsTotal
        }

    }, false);
}

// within each click event...
// determine which box was clicked with 'this.textContent' or event.target.textContent
// convert that value to a Number and store it to a variable


// create a random number between 1-3 and store it to a variable

//console.log(rndInt);
// This number will represent the winning box

// determine if the box clicked is equal to the random number
// if the numbers match, display a winning message by changing the text content of the div#message element
// if the numbers match, increment wins and display the win count in div#wins






// if the numbers don't match, change the div#message element's text to a random losing message from the array above
// if the numbers don't match, increment losses and display the loss count in div#losses