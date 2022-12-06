//Day 6: Tuning Trouble

import * as fs from "fs";
const input = fs.readFileSync("in.txt", "utf8");

const markerLength = 14;

let endOfMarkerIndex: number | null = null;

for (let i = markerLength - 1; i < input.length; i++) {
  const workingCharacterList: string[] = [];
  for (let j = i; j > i - markerLength; j--) {
    if (!workingCharacterList.includes(input[j])) {
      workingCharacterList.push(input[j]);
    }
  }

  if (workingCharacterList.length == markerLength) {
    endOfMarkerIndex = i;
    break;
  }
}

if (endOfMarkerIndex) {
  console.log(endOfMarkerIndex + 1);
} else {
  console.log("No marker found");
}
