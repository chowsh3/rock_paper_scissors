console.log("Welcome rock paper scissors!");

//Obtain a choice from the user



const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});
// Validate the users choice and gell them if they made a mistake
    //strip capitalisation or ignore caps
function handleUserResponse(response) {
  if (response !== "rock" && response !== "paper" && response !== "scissors") {
    console.log("Please enter as shown: rock, paper or scissors");
    readline.close();
  } else {


    


    //Make a random selection for the computer
    randomSelection = Math.floor(Math.random() * 3);
    //A radnom  choice of rock paper or scissors-how to make the pc make a random choice

    if (randomSelection === 1) {
      randomSelection = "rock";
    } else if (randomSelection === 2) {
      randomSelection = "paper";
    } else {
      randomSelection = "scissors";
    }
    console.log(randomSelection);
    //compare the two choices

    var compare = function(response, randomSelection) {
      if (response === randomSelection) {
        console.log("DRAW");
      } else if (response === "rock") {
        if (randomSelection === "scissors") {
          console.log("rock wins");
        } else console.log("papers wins");

      } else if (response === "paper") {
        if (randomSelection === "rock") {
          console.log("paper wins");
        } else {
          console.log("scissors wins");
        }
      }
    };

    compare(response, randomSelection);


   
    readline.close();

  }
}
readline.question("Please choose either rock, paper or scissors!\n", handleUserResponse);
