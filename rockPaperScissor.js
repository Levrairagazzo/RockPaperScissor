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
    // alert("Rock? Paper? Or Scissors?");
    const element = document.getElementById("myBtn");
element.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}
    return;
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

function rock() {
    let comp = computerPlay();
   
    if(comp === "rock"){
    alert("Computer played: " + comp + "\nPlayer played: rock" + "\n This is a draw");
    }else if (comp === "scissors"){
        alert("Computer played: " + comp + "\nPlayer played: rock" + "\nPlayer win!!");
    }else if (comp === "paper") {
        alert("Computer played: " + comp + "\nPlayer played: rock" + "\nComputer wins!!");
    }
        
  }
function paper(){
    let comp = computerPlay();
    if(comp === "paper"){
        alert("Computer played: " + comp + "\nPlayer played: paper" + "\n This is a draw");
        }else if (comp === "scissors"){
            alert("Computer played: " + comp + "\nPlayer played: paper" + "\nComputer win!!");
        }else if (comp === "rock") {
            alert("Computer played: " + comp + "\nPlayer played: paper" + "\nPlayer wins!!");
        }
}
function scissors(){
    let comp = computerPlay();
    if(comp === "scissors"){
        alert("Computer played: " + comp + "\nPlayer played: scissors" + "\n This is a draw");
        }else if (comp === "paper"){
            alert("Computer played: " + comp + "\nPlayer played: scissors" + "\Player win!!");
        }else if (comp === "rock") {
            alert("Computer played: " + comp + "\nPlayer played: scissors" + "\nComputer wins!!");
        }
}



