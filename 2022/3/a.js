"use strict";
var _a;
exports.__esModule = true;
var fs = require("fs");
var input = fs.readFileSync("in.txt", "utf8");
var splitInput = input.split("\n");
var itemPriorities = new Map();
for (var i = 0; i < 26; i++) {
    itemPriorities.set(String.fromCharCode(97 + i), i + 1);
    itemPriorities.set(String.fromCharCode(65 + i), i + 27);
}
var prioritiesTotal = 0;
for (var i = 0; i < splitInput.length; i += 3) {
    var elf1 = splitInput[i].split("");
    var elf2 = splitInput[i + 1].split("");
    var elf3 = splitInput[i + 2].split("");
    var firstIntersection = intesection(elf1, elf2);
    var badge = intesection(firstIntersection, elf3)[0];
    console.log(badge);
    prioritiesTotal += (_a = itemPriorities.get(badge)) !== null && _a !== void 0 ? _a : 0;
}
console.log(prioritiesTotal);
function intesection(a, b) {
    return a.filter(function (x) { return b.includes(x); });
}
