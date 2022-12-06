"use strict";
//Day 5: Supply Stacks
var _a;
exports.__esModule = true;
var fs = require("fs");
var input = fs.readFileSync("in.txt", "utf8");
var splitInput = input.split("\n\n");
/*
[C]         [S] [H]
[F] [B]     [C] [S]     [W]
[B] [W]     [W] [M] [S] [B]
[L] [H] [G] [L] [P] [F] [Q]
[D] [P] [J] [F] [T] [G] [M] [T]
[P] [G] [B] [N] [L] [W] [P] [W] [R]
[Z] [V] [W] [J] [J] [C] [T] [S] [C]
[S] [N] [F] [G] [W] [B] [H] [F] [N]
 1   2   3   4   5   6   7   8   9
*/
var inputStacks = splitInput[0].split("\n");
var inputInstructions = splitInput[1].split("\n");
// drop labels from stacks string
var stacksWithoutLabels = inputStacks.slice(0, -1);
console.log(stacksWithoutLabels);
var startingCharacterIndex = 1;
var characterSpacing = 4;
var stacks = [];
// loop over columns building array of crates
for (var j = startingCharacterIndex; j < stacksWithoutLabels[0].length; j += characterSpacing) {
    var stack = [];
    // loop backward through rows (bottom to top of stack) until there are no crates
    for (var i = stacksWithoutLabels.length - 1; i >= 0; i--) {
        var char = stacksWithoutLabels[i][j];
        if (char === " ") {
            break;
        }
        else {
            stack.push(char);
        }
    }
    stacks.push(stack);
}
// move 2 from 5 to 9
for (var _i = 0, inputInstructions_1 = inputInstructions; _i < inputInstructions_1.length; _i++) {
    var instruction = inputInstructions_1[_i];
    var instructionWithoutLetters = instruction.replace(/[a-z]/g, "");
    var splitInstruction = instructionWithoutLetters
        .split(" ")
        .filter(function (x) { return x !== ""; });
    var quantity = parseInt(splitInstruction[0]);
    var from = parseInt(splitInstruction[1]);
    var to = parseInt(splitInstruction[2]);
    for (var i = 0; i < quantity; i++) {
        var crate = stacks[from - 1].pop();
        if (crate) {
            stacks[to - 1].push(crate);
        }
    }
}
var answer = [];
for (var _b = 0, stacks_1 = stacks; _b < stacks_1.length; _b++) {
    var stack = stacks_1[_b];
    answer.push((_a = stack.pop()) !== null && _a !== void 0 ? _a : "");
}
console.log(answer.join(""));
