// make the text for the instructions

// make a random number element that when called upon you can set the range of the number
function randomNum(min, max) {
    var num = Math.floor((Math.random() * max) + min);
}

// make the wins, and loses counters 
var wins = 0;
var loses = 0;

// make a guessed numbers element to hold the added up numbers 
var wholeNum = 0;

// make elements for each crystal to be each round calling the random number generator
var ruby = 0;
var diamond = 0;
var sapphire = 0;
var emerald = 0;

$(document).ready(function() {
    // make the crystal buttons 
    $(".diamond-button").on("click", function() {
        audioElement.play();
    });
    $(".ruby-button").on("click", function() {
        audioElement.play();
    });
    $(".sapphire-button").on("click", function() {
        audioElement.play();
    });
    $(".emerald-button").on("click", function() {
        audioElement.play();
    });
})

// create a document for the game to take place in
button.addEventListener("click", function() {
    console.log("inside click document")

})