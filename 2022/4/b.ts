//Day 4: Camp Cleanup Part B

import * as fs from "fs";
const input = fs.readFileSync("in.txt", "utf8");
const splitInput = input.split("\n");

function createRange(start: number, end: number): number[] {
  let range: number[] = [];
  for (let i = start; i <= end; i++) {
    range.push(i);
  }
  return range;
}

function intesection<T>(a: Array<T>, b: Array<T>): Array<T> {
  return a.filter((x) => b.includes(x));
}

let pairsWithOverlap = 0;

for (let line of splitInput) {
  const elf1Range = line.split(",")[0]; //first range, convert to string
  const elf1Split = elf1Range.split("-"); //split the range into two numbers
  const elf1Min = parseInt(elf1Split[0]); //convert the first number to an integer
  const elf1Max = parseInt(elf1Split[1]); //convert the second number to an integer
  const elf1AssignedSections = createRange(elf1Min, elf1Max); //create a range of numbers from the first number to the second number

  const elf2Range = line.split(",")[1]; //second range, convert to string
  const elf2Split = elf2Range.split("-"); //split the range into two numbers
  const elf2Min = parseInt(elf2Split[0]); //convert the first number to an integer
  const elf2Max = parseInt(elf2Split[1]); //convert the second number to an integer
  const elf2AssignedSections = createRange(elf2Min, elf2Max); //create a range of numbers from the first number to the second number

  // Compare the two ranges
  const sectionsInCommon = intesection(
    elf1AssignedSections,
    elf2AssignedSections
  );
  // find number of sections in common
  const numberSectionsInCommon = sectionsInCommon.length;
  if (numberSectionsInCommon >= 1) {
    pairsWithOverlap++;
  }
}
console.log(pairsWithOverlap);
