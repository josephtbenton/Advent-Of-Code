"use strict";
exports.__esModule = true;
var fs = require("fs");
var input = fs.readFileSync("a.txt", "utf8");
var splitInput = input.split("\n");
function decodeRPS(input) {
    switch (input) {
        case "A":
            return "rock";
        case "B":
            return "paper";
        case "C":
            return "scissors";
        default:
            throw new Error("Invalid input");
    }
}
function decodeOutcome(input) {
    switch (input) {
        case "X":
            return "loss";
        case "Y":
            return "tie";
        case "Z":
            return "win";
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
function play(a, desiredOutcome) {
    if (desiredOutcome === "tie") {
        return a;
    }
    if (a === "rock") {
        return desiredOutcome == "win" ? "paper" : "scissors";
    }
    else if (a === "paper") {
        return desiredOutcome == "win" ? "scissors" : "rock";
    }
    else {
        return desiredOutcome == "win" ? "rock" : "paper";
    }
}
var totalScore = 0;
for (var _i = 0, splitInput_1 = splitInput; _i < splitInput_1.length; _i++) {
    var line = splitInput_1[_i];
    var splitLine = line.split(" ");
    var opponentsPlay = decodeRPS(splitLine[0]);
    var desiredOutcome = decodeOutcome(splitLine[1]);
    var desiredPlay = play(opponentsPlay, desiredOutcome);
    if (desiredOutcome === "win") {
        totalScore += 6;
    }
    else if (desiredOutcome === "tie") {
        totalScore += 3;
    }
    totalScore += playValue(desiredPlay);
}
console.log(totalScore);
