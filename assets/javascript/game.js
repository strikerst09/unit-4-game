// Javascript for Crystal Collector Game

// ----Variables---- //
// Variable for target number
var targetNumber = Math.floor(Math.random() * 101) + 19;
$("#randomNumberBox").text("Your target is: " + targetNumber);

// Variables for user count, user wins, user losses
var counter = 0;
var wins = 0;
var losses = 0;

// Function for setting crystal value
document.onload() function() {
    var crystalValue = 
}

// Function for on click event
$(".crystal-image").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    $("#userNumberBox").text("Your current number is: " + counter); 
    if (counter === targetNumber) {
        wins++;
        $("#totalsBox").text("You win! Total Wins: " + wins + " Total Losses: " + losses)   
    }
    else if (counter >= targetNumber) {
        losses++;
        $("#totalsBox").text("You LOSE! Total Wins: " + wins + " Total Losses: " + losses);
    }
});

//Function to reset target number and counter
$("#reset").on("click", function() {
    counter = 0;
    targetNumber = Math.floor(Math.random() * 101) + 19;
    $("#randomNumberBox").text("Your target is: " + targetNumber);
    $("#userNumberBox").text("Your current number is: " + counter);
});