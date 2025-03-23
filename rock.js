let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorePara = document.querySelector("#user-score");
const compscorePara = document.querySelector("#comp-score");

//draw game
const drawGame = () => {
 msg.innerText = "Game was draw, Play Again!";
 msg.style.backgroundColor = "#081b31";
}
//to show winner
const showWinner = (userwin,userChoice, compChoice) => {
  if(userwin){
    userScore++;
    userscorePara.innerText = userScore;
   msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
   msg.style.backgroundColor = "green";
  }
  else{
    compScore++;
    compscorePara.innerText = compScore;
    msg.innerText = `You Lost! ${compChoice} beats  your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

// computer choice
const genCompScore = () => {
  const options = ["rock" ,"paper" ,"scissors"];
  const random = Math.floor(Math.random() * 3);
  return options[random]
};

const playGame = (userChoice) => {
    console.log("User choice = ",userChoice);
    //generate computer score
    const compChoice = genCompScore();
    console.log("Computer choice = ",compChoice);

    if(userChoice === compChoice)//draw game
    drawGame();
    else{
        let userwin = true;
        if(userChoice === "rock"){
            userwin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userwin = compChoice === "rock" ? true : false;
        }
        else{
            userwin = compChoice === "rock" ?false : true;
        }
        showWinner(userwin,userChoice,compChoice);
    }
};

//user choice
choices.forEach((choice) => {
    choice.addEventListener("click",() => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
    });
});