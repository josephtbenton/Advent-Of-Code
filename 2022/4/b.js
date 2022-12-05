"use strict";
//Day 4: Camp Cleanup Part B
exports.__esModule = true;
var fs = require("fs");
var input = fs.readFileSync("in.txt", "utf8");
var splitInput = input.split("\n");
function createRange(start, end) {
    var range = [];
    for (var i = start; i <= end; i++) {
        range.push(i);
    }
    return range;
}
function intesection(a, b) {
    return a.filter(function (x) { return b.includes(x); });
}
var pairsWithOverlap = 0;
for (var _i = 0, splitInput_1 = splitInput; _i < splitInput_1.length; _i++) {
    var line = splitInput_1[_i];
    var elf1Range = line.split(",")[0]; //first range, convert to string
    var elf1Split = elf1Range.split("-"); //split the range into two numbers
    var elf1Min = parseInt(elf1Split[0]); //convert the first number to an integer
    var elf1Max = parseInt(elf1Split[1]); //convert the second number to an integer
    var elf1AssignedSections = createRange(elf1Min, elf1Max); //create a range of numbers from the first number to the second number
    var elf2Range = line.split(",")[1]; //second range, convert to string
    var elf2Split = elf2Range.split("-"); //split the range into two numbers
    var elf2Min = parseInt(elf2Split[0]); //convert the first number to an integer
    var elf2Max = parseInt(elf2Split[1]); //convert the second number to an integer
    var elf2AssignedSections = createRange(elf2Min, elf2Max); //create a range of numbers from the first number to the second number
    // Compare the two ranges
    var sectionsInCommon = intesection(elf1AssignedSections, elf2AssignedSections);
    // find number of sections in common
    var numberSectionsInCommon = sectionsInCommon.length;
    if (numberSectionsInCommon >= 1) {
        pairsWithOverlap++;
    }
}
console.log(pairsWithOverlap);
