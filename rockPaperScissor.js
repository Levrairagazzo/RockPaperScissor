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
    return "draw";
    }
    else if (computer === "rock" && player === "scissors"){
        console.log("Computer won");
        return "computer";
    }
      
   else if (computer === "paper" && player === "rock"){
        console.log("Computer won");
        return "computer";
    }else{
        console.log("Player won !!")
        return "player"
    }

   


}

function game(){
    let player = 0;
    let computer = 0;
    let roundResult = "";
    for (let index = 0; index < 5; index++) {
        roundResult = play();
        if(roundResult === "player")
            player ++;
        else if(roundResult === "computer")
            computer ++;

        console.log("Computer total: " + computer)
        console.log("Playe total: " + player)
    }

    if(player > computer)
        console.log("Player won!!!!!")
    else if(player < computer)
        console.log("Computer won!!!!!")
    else
        console.log("It's a draw!")

}

//Launching the game:
game();

