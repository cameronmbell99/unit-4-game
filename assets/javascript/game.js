// create a document for the game to take place in
$(document).ready(function() {

    // make a random number element that when called upon you can set the range of the number
    function num(min, max) {
        return Math.floor((Math.random() * (max - min)) + min);
    }

    // make a random number to guess
    var gameTotal = num(19, 120);
    $("#gameTotal").html(gameTotal);

    // make the wins, and loses counters 
    var wins = 0;
    var loses = 0;

    // make a guessed numbers element to hold the added up numbers 
    var wholeNum = 0;
    $("#numGuessed").html(wholeNum);

    // make elements for each crystal to be each round calling the random number generator
    var ruby = num(1, 12);
    var diamond = num(1, 12);
    var sapphire = num(1, 12);
    var emerald = num(1, 12);

    console.log("diamond" + diamond);
    console.log("ruby" + ruby);
    console.log("sapphire" + sapphire);
    console.log("emerald" + emerald);
    console.log("game total" + gameTotal);


    function gameReset() {
        wholeNum = 0;
        $("#numGuessed").html(wholeNum);
        ruby = num(1, 12);
        diamond = num(1, 12);
        sapphire = num(1, 12);
        emerald = num(1, 12);
        gameTotal = num(19, 120);
        $("#gameTotal").html(gameTotal);
    }

    console.log("The Game has been set up")

    $("#loseCounter").html("Losses = " + loses);
    $("#winCounter").html("Wins = " + wins);

    // make the crystal buttons 
    $("#diamond-button").on("click", function() {
        $("#NumGuessed").html(wholeNum += diamond);
        console.log("Diamond being pressed");
    });
    $("#ruby-button").on("click", function() {
        $("#NumGuessed").html(wholeNum += ruby);
        console.log("Ruby being pressed");
    });
    $("#sapphire-button").on("click", function() {
        $("#NumGuessed").html(wholeNum += sapphire);
        console.log("Sapphire being pressed");
    });
    $("#emerald-button").on("click", function() {
        $("#NumGuessed").html(wholeNum += emerald);
        console.log("Emerald being pressed");
    });

    $(document).on("click", function() {
        $("#numGuessed").html(wholeNum);
        if (wholeNum === gameTotal) {
            wins++;
            gameReset();
            $("#loseCounter").html("Losses = " + loses);
            $("#winCounter").html("Wins = " + wins);
        } else if (wholeNum > gameTotal) {
            loses++;
            gameReset();
            $("#loseCounter").html("Losses = " + loses);
            $("#winCounter").html("Wins = " + wins);
        }
    });






})