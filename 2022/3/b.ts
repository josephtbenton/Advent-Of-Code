import * as fs from "fs";
const input = fs.readFileSync("in.txt", "utf8");
const splitInput = input.split("\n");

function intesection<T>(a: Array<T>, b: Array<T>): Array<T> {
  return a.filter((x) => b.includes(x));
}

const itemPriorities: Map<string, number> = new Map();

for (let i = 0; i < 26; i++) {
  itemPriorities.set(String.fromCharCode(97 + i), i + 1);
  itemPriorities.set(String.fromCharCode(65 + i), i + 27);
}

let prioritiesTotal = 0;
for (let i = 0; i < splitInput.length; i += 3) {
  const elf1 = splitInput[i].split("");
  const elf2 = splitInput[i + 1].split("");
  const elf3 = splitInput[i + 2].split("");

  const firstIntersection = intesection(elf1, elf2);
  const badge = intesection(firstIntersection, elf3)[0];
  console.log(badge);

  prioritiesTotal += itemPriorities.get(badge) ?? 0;
}

console.log(prioritiesTotal);
