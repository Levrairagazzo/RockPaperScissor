function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function computerPlay(){
let computerChoice = getRandomInt(3);
if(computerChoice === 0)
    return "rock";
else if (computerChoice === 1)
    return "paper";
else    
    return "scissors";
}
function playerPlay(){
    let playerChoice = prompt("Rock? Paper? Or Scissors?");
    return playerChoice.toLowerCase();
}

function play(){
    let computer = computerPlay();
    let player = playerPlay();

    console.log("Player plays " + player + "\nComputer plays " + computer);

    if(computer === player){
    console.log("It's a draw")
    return;
    }
    else if (computer === "rock" && player == "scissors"){
        console.log("Computer won");
        return;
    }
      
   else if (computer === "paper" && player == "rock"){
        console.log("Computer won");
        return;
    }else{
        console.log("Player won !!")
    }

   


}

play();