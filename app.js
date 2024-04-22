let userScore = 0;
let compScore = 0;
let uScore = document.querySelector("#user-score")
let cScore = document.querySelector("#comp-score")
const choices = document.querySelectorAll(".choice");
const msgCon = document.querySelector(".msg-container")
const msg = document.querySelector("#msg")
const genCompChoice = () => {
    const options = ["rock","paper", "scissor"];
    const ranIdx =  Math.floor(Math.random()*3);
    return options[ranIdx];
}
const drawGame = () =>{
msgCon.style.backgroundColor = "#022970"
}
const showWinner = (userWin, userChoice, compChoice) => {
 if(userWin) {
 msg.innerHTML = `Congrats! You Won, Your ${userChoice} beats ${compChoice}`
 msgCon.style.backgroundColor = "green"
 userScore++;
 uScore.innerHTML = userScore;
} else {
    msg.innerHTML = `Oops! You lose, ${compChoice} beats  your ${userChoice}`
    msgCon.style.backgroundColor = "red"
    compScore++;
    cScore.innerHTML = compScore;
}
}
const playGame = (userChoice) => {
//Generate Computer Choice
const compChoice = genCompChoice();
if(userChoice === compChoice){
    drawGame();
    msg.innerHTML = "Its a draw!"

}
else {
    let userWin = true;
    if(userChoice === "rock"){
        //scissor, paper
        userWin = compChoice === "scissor" ? true : false;
    }
    else if (userChoice === "paper"){
        //scissor, rock
        userWin = compChoice === "scissor" ? false : true;
    }
    else {
        //rock, paper
        userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
}
}
choices.forEach((choice) => {
choice.addEventListener("click" , ()=>{
    let userChoice = choice.getAttribute("id")
    playGame(userChoice)
})
})