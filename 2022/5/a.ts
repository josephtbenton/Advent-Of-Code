//Day 5: Supply Stacks

import * as fs from "fs";
const input = fs.readFileSync("in.txt", "utf8");
const splitInput = input.split("\n\n");
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

const inputStacks = splitInput[0].split("\n");
const inputInstructions = splitInput[1].split("\n");

// drop labels from stacks string
const stacksWithoutLabels = inputStacks.slice(0, -1);
console.log(stacksWithoutLabels);

const startingCharacterIndex = 1;
const characterSpacing = 4;
const stacks: string[][] = [];
// loop over columns building array of crates
for (
  let j = startingCharacterIndex;
  j < stacksWithoutLabels[0].length;
  j += characterSpacing
) {
  const stack: string[] = [];
  // loop backward through rows (bottom to top of stack) until there are no crates
  for (let i = stacksWithoutLabels.length - 1; i >= 0; i--) {
    const char = stacksWithoutLabels[i][j];
    if (char === " ") {
      break;
    } else {
      stack.push(char);
    }
  }
  stacks.push(stack);
}

// move 2 from 5 to 9

for (let instruction of inputInstructions) {
  const instructionWithoutLetters = instruction.replace(/[a-z]/g, "");
  const splitInstruction = instructionWithoutLetters
    .split(" ")
    .filter((x) => x !== "");

  const quantity = parseInt(splitInstruction[0]);
  const from = parseInt(splitInstruction[1]);
  const to = parseInt(splitInstruction[2]);

  for (let i = 0; i < quantity; i++) {
    const crate = stacks[from - 1].pop();
    if (crate) {
      stacks[to - 1].push(crate);
    }
  }
}

const answer: string[] = [];
for (let stack of stacks) {
  answer.push(stack.pop() ?? "");
}

console.log(answer.join(""));
