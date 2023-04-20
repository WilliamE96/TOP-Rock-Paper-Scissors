function getComputerGuess () {
let random = Math.floor(Math.random() * 3) + 1;
  switch(random) {
    case 1: 
    computer = "ROCK";
    break;
    case 2: 
    computer = "PAPER";
    break;
    case 3: 
    computer = "SCISSORS";
    break;
  }
}

console.log(random);
/* Math.random generates a random decimal between 
0 and 1. Math.floor rounds that number to the nearest
whole. *3 makes it so the limit is 3. +1
is an "offset" so that it doesn't start at 0 */

/* I was right with the random number generator. I wasn't sure 
how to connect it with whatever was to follow (switch statement). 
From what I can tell, that's called "Examine", "I can now examine
this with a switch statement". It's connected through the switch's
parentheses. */





