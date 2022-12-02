import * as fs from "fs";
const input = fs.readFileSync("a.txt", "utf8");
const splitInput = input.split("\n");

type RPSPlay = "rock" | "paper" | "scissors";
type Outcome = "win" | "tie" | "loss";

function decodeRPS(input: string): RPSPlay {
  switch (input) {
    case "A":
      return "rock";
    case "B":
      return "paper";
    case "C":
      return "scissors";
    default:
      throw new Error("Invalid input");
  }
}

function decodeOutcome(input: string): Outcome {
  switch (input) {
    case "X":
      return "loss";
    case "Y":
      return "tie";
    case "Z":
      return "win";
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

function play(a: RPSPlay, desiredOutcome: Outcome): RPSPlay {
  if (desiredOutcome === "tie") {
    return a;
  }
  if (a === "rock") {
    return desiredOutcome == "win" ? "paper" : "scissors";
  } else if (a === "paper") {
    return desiredOutcome == "win" ? "scissors" : "rock";
  } else {
    return desiredOutcome == "win" ? "rock" : "paper";
  }
}

let totalScore = 0;
for (let line of splitInput) {
  let splitLine = line.split(" ");
  let opponentsPlay = decodeRPS(splitLine[0]);
  let desiredOutcome = decodeOutcome(splitLine[1]);
  let desiredPlay = play(opponentsPlay, desiredOutcome);
  if (desiredOutcome === "win") {
    totalScore += 6;
  } else if (desiredOutcome === "tie") {
    totalScore += 3;
  }
  totalScore += playValue(desiredPlay);
}
console.log(totalScore);
