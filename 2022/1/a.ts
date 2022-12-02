import * as fs from "fs";
const input = fs.readFileSync("a.txt", "utf8");
const splitInput = input.split("\n");

let highestCaloriesSoFar = 0;

let currentElfsCalories = 0;
for (let line of splitInput) {
  if (line) {
    const calories = parseInt(line);
    currentElfsCalories += calories;
  } else {
    if (currentElfsCalories > highestCaloriesSoFar) {
      highestCaloriesSoFar = currentElfsCalories;
    }
    currentElfsCalories = 0;
  }
}

console.log(highestCaloriesSoFar);
