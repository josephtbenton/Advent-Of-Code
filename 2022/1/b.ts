import * as fs from "fs";
const input = fs.readFileSync("a.txt", "utf8");
const splitInput = input.split("\n");

let allElvesCalories: number[] = [];

let currentElfsCalories = 0;
for (let line of splitInput) {
  if (line) {
    const calories = parseInt(line);
    currentElfsCalories += calories;
  } else {
    allElvesCalories.push(currentElfsCalories);
    currentElfsCalories = 0;
  }
}

allElvesCalories.sort((a, b) => b - a);

let topThree = allElvesCalories.slice(0, 3);
console.log(topThree);
let sum = 0;
for (let calories of topThree) {
  sum += calories;
}
console.log(sum);
