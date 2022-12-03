import * as fs from "fs";
const input = fs.readFileSync("in.txt", "utf8");
const splitInput = input.split("\n");

const itemPriorities: Map<string, number> = new Map();

for (let i = 0; i < 26; i++) {
  itemPriorities.set(String.fromCharCode(97 + i), i + 1);
  itemPriorities.set(String.fromCharCode(65 + i), i + 27);
}

let prioritiesTotal = 0;
for (let line of splitInput) {
  const midIndex = line.length / 2;
  const leftCompartment = line.slice(0, midIndex);
  const rightCompartment = line.slice(midIndex, line.length);

  const leftCompartmentItems = leftCompartment.split("");
  const rightCompartmentItems = rightCompartment.split("");

  const misplacedItems = intesection(
    leftCompartmentItems,
    rightCompartmentItems
  );

  const uniqueItems: string[] = [];
  for (let item of misplacedItems) {
    if (!uniqueItems.includes(item)) {
      uniqueItems.push(item);
      prioritiesTotal += itemPriorities.get(item) ?? 0;
    }
  }
}

console.log(prioritiesTotal);

function intesection<T>(a: Array<T>, b: Array<T>): Array<T> {
  return a.filter((x) => b.includes(x));
}
