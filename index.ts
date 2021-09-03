import { question, questionInt } from "readline-sync";

const name = question("What's your name?\n");
console.log(`Hi ${name}`);

let shouldContinue = true;

do {
  const guess = questionInt("What no. is on your mind b/w 1-10?\n");
  const answer = Math.floor(Math.random() * 10 + 1);
  shouldContinue = guess !== answer ;
  console.log(`The correct answer was ${answer}\n`);
  
} while (shouldContinue);

console.log(`Congratulations ${name}, you won\n`)
