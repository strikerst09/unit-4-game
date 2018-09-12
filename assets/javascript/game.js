// Javascript for Crystal Collector Game

// ----Variables---- //
// Variable for target number
var targetNumber = Math.floor(Math.random() * 101) + 19;
document.getElementById("randomNumberBox").innerHTML = targetNumber;

// Variables for user count, user wins, user losses
var counter = 0;
var wins = 0;
var losses = 0;

// Variable for crystal values
var numberOptions = [1,2,7,12];

// For statement assigns values to crystals
// for (var i = 0; i < numberOptions.length; i++) {
//     var imageCrystal = document.querySelectorAll(".crystal-image");
//     imageCrystal.getAttribute("data-crystalvalue", numberOptions[i]);
//     document.querySelectorAll(".crystal-image").join(imageCrystal);
// }

for (var i = 0; i < numberOptions.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    $("#crystals").append(imageCrystal);
}

// Function for on click event
$(".crystal-image").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue - parseInt(crystalValue);
    console.log(crystalValue);
    counter += crystalValue;
    document.getElementById("userNumberBox").innerHTML = 
    ("New total: " + counter);
    if (counter === targetNumber) {
        document.getElementById("totalsBox").innerHTML = ("You win!")
    };
});