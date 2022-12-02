"use strict";
exports.__esModule = true;
var fs = require("fs");
var input = fs.readFileSync("a.txt", "utf8");
var splitInput = input.split("\n");
function decodeRPS(input) {
    switch (input) {
        case "A":
        case "X":
            return "rock";
        case "B":
        case "Y":
            return "paper";
        case "C":
        case "Z":
            return "scissors";
        default:
            throw new Error("Invalid input");
    }
}
function playValue(play) {
    switch (play) {
        case "rock":
            return 1;
        case "paper":
            return 2;
        case "scissors":
            return 3;
    }
}
function outcome(a, b) {
    if (a === b) {
        return "tie";
    }
    if (a === "rock") {
        return b === "paper" ? "b" : "a";
    }
    else if (a === "paper") {
        return b === "scissors" ? "b" : "a";
    }
    else {
        return b === "rock" ? "b" : "a";
    }
}
var totalScore = 0;
for (var _i = 0, splitInput_1 = splitInput; _i < splitInput_1.length; _i++) {
    var line = splitInput_1[_i];
    var splitLine = line.split(" ");
    var opponentsPlay = decodeRPS(splitLine[0]);
    var myPlay = decodeRPS(splitLine[1]);
    var playOutcome = outcome(myPlay, opponentsPlay);
    if (playOutcome === "a") {
        totalScore += 6;
    }
    else if (playOutcome === "tie") {
        totalScore += 3;
    }
    totalScore += playValue(myPlay);
    console.log(line);
    console.log(opponentsPlay, myPlay, playOutcome, playValue(myPlay), totalScore);
}
console.log(totalScore);
