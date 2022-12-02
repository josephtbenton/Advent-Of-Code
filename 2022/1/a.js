"use strict";
exports.__esModule = true;
var fs = require("fs");
var input = fs.readFileSync("a.txt", "utf8");
var splitInput = input.split("\n");
var highestCaloriesSoFar = 0;
var currentElfsCalories = 0;
for (var _i = 0, splitInput_1 = splitInput; _i < splitInput_1.length; _i++) {
    var line = splitInput_1[_i];
    if (line) {
        var calories = parseInt(line);
        currentElfsCalories += calories;
    }
    else {
        if (currentElfsCalories > highestCaloriesSoFar) {
            highestCaloriesSoFar = currentElfsCalories;
        }
        currentElfsCalories = 0;
    }
}
console.log(highestCaloriesSoFar);
