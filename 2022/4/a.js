"use strict";
//Day 4: Camp Cleanup
exports.__esModule = true;
var fs = require("fs");
var input = fs.readFileSync("in.txt", "utf8");
var splitInput = input.split("\n");
function createRange(start, end) {
    var range = [];
    // deb writes code here (probably a for loop 🤔)
    for (var i = start; i <= end; i++) {
        range.push(i);
    }
    return range;
}
function intesection(a, b) {
    return a.filter(function (x) { return b.includes(x); });
}
var pairsFullyContained = 0;
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
    // find number of sections in common and number of sections each elf has assigned
    var numberSectionsInCommon = sectionsInCommon.length;
    var elf1NumberOfSections = elf1AssignedSections.length;
    var elf2NumberOfSections = elf2AssignedSections.length;
    // if the number of sections in common is equal to the number of sections either elf has assigned, then one elf's assignments are fully contained within the other elf's assignments
    if (numberSectionsInCommon == elf1NumberOfSections ||
        numberSectionsInCommon == elf2NumberOfSections) {
        pairsFullyContained++;
    }
}
console.log(pairsFullyContained);
