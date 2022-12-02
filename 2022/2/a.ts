import * as fs from "fs";
const input = fs.readFileSync("a.txt", "utf8");
const splitInput = input.split("\n");

type RPSPlay = "rock" | "paper" | "scissors";

function decodeRPS(input: string): RPSPlay {
  switch (input) {
    case "A":
    case "X":
      return "rock";
    case "B":
    case "Y":
      return "paper";
    case "C":
    case "Z":
      return "scissors";
    default:
      throw new Error("Invalid input");
  }
}

function playValue(play: RPSPlay): number {
  switch (play) {
    case "rock":
      return 1;
    case "paper":
      return 2;
    case "scissors":
      return 3;
  }
}

function outcome(a: RPSPlay, b: RPSPlay): "a" | "tie" | "b" {
  if (a === b) {
    return "tie";
  }
  if (a === "rock") {
    return b === "paper" ? "b" : "a";
  } else if (a === "paper") {
    return b === "scissors" ? "b" : "a";
  } else {
    return b === "rock" ? "b" : "a";
  }
}

let totalScore = 0;
for (let line of splitInput) {
  let splitLine = line.split(" ");
  let opponentsPlay = decodeRPS(splitLine[0]);
  let myPlay = decodeRPS(splitLine[1]);
  let playOutcome = outcome(myPlay, opponentsPlay);
  if (playOutcome === "a") {
    totalScore += 6;
  } else if (playOutcome === "tie") {
    totalScore += 3;
  }
  totalScore += playValue(myPlay);
  console.log(line);
  console.log(
    opponentsPlay,
    myPlay,
    playOutcome,
    playValue(myPlay),
    totalScore
  );
}
console.log(totalScore);
