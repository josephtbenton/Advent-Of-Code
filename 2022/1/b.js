"use strict";
exports.__esModule = true;
var fs = require("fs");
var input = fs.readFileSync("a.txt", "utf8");
var splitInput = input.split("\n");
var allElvesCalories = [];
var currentElfsCalories = 0;
for (var _i = 0, splitInput_1 = splitInput; _i < splitInput_1.length; _i++) {
    var line = splitInput_1[_i];
    if (line) {
        var calories = parseInt(line);
        currentElfsCalories += calories;
    }
    else {
        allElvesCalories.push(currentElfsCalories);
        currentElfsCalories = 0;
    }
}
allElvesCalories.sort(function (a, b) { return b - a; });
var topThree = allElvesCalories.slice(0, 3);
console.log(topThree);
var sum = 0;
for (var _a = 0, topThree_1 = topThree; _a < topThree_1.length; _a++) {
    var calories = topThree_1[_a];
    sum += calories;
}
console.log(sum);
