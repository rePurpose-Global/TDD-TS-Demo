import { question, questionInt } from "readline-sync";
import { isValidName } from "./is-valid-name";
let name = "-1";

do {
  // ask user to input a name
  name = question("What's your name?\n");
} while (!isValidName(name));

console.log(`Hi ${name}`);

let shouldContinue = true;

do {
  const guess = questionInt("What no. is on your mind b/w 1-10?\n");
  if (guess > 10 || guess < 1) {
    console.error("Please read the instructions properly");
    continue;
  }
  const answer = Math.floor(Math.random() * 10 + 1);
  if (guess !== answer) {
    console.log(`The correct answer was ${answer}\n`);
    const userWill = question("Do you want to try again? (y/n)\n");
    if (userWill === "n") {
      shouldContinue = false;
      console.log(`Better luck next time coward`);
    }
  } else {
    shouldContinue = false;
    console.log(`Congratulations ${name}, you won\n`);
  }
} while (shouldContinue);
