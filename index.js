//Select elements
const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
// Select the image element using its ID
const playerImg = document.getElementById("playerImg");
const computerImg = document.getElementById("computerImg");
// Select the button element using its ID
const choiceBtns  = document.querySelectorAll(".choiceBtn");

//Image Animation setting
const imgSpinning = [
    { transform: "rotate(0)  scale(.3)" },
    { transform: "rotate(360deg)  scale(1)" },
  ];
const imgTiming = {
    duration: 300,
    iterations: 1,
  };

let player;
let computer;
let result;

//Start program once clicked
choiceBtns.forEach(button => button.addEventListener("click", () =>{
    //get player choice, Get button text content
    player = button.textContent;
    //get computer choice
    computerTurn();

    //change image of player and computer, animate
    changeImage(player, playerImg);
    playerImg.animate(imgSpinning, imgTiming);

    changeImage(computer, computerImg);
    computerImg.animate(imgSpinning, imgTiming);

    //win/lose
    resultText.textContent = checkWinner();
}));

//Select picked image: rock, paper, scissors
function changeImage(choice, myImg){
    switch(choice){
        case "ROCK":
            myImg.src = "./img/rock150x150.png";
            break;
        case "PAPER":
            myImg.src = "./img/paper150x150.png";
            break;
        case "SCISSORS":
            myImg.src = "./img/scissors150x150.png";
            break;
    }
}

//Make random computer choice
function computerTurn(){
    const randNum = Math.floor(Math.random() * 3) + 1;
    switch(randNum){
        case 1:
            computer = "ROCK"
            break;
        case 2:
            computer = "PAPER"
            break;
        case 3:
            computer = "SCISSORS"
            break;
    }
}

//Judge who won
function checkWinner(){
    if(player == computer){
        return "⚔️ Draw! ⚔️"
    }
    else if(computer == "ROCK"){
        return (player == "PAPER") ? "🚀 You Win! 🚀" : "👻 You Lose! 👻";
    }
    else if(computer == "PAPER"){
        return (player == "SCISSORS") ? "🚀 You Win! 🚀" : "👻 You Lose! 👻";
    }
    else if(computer == "SCISSORS"){
        return (player == "ROCK") ? "🚀 You Win! 🚀" : "👻 You Lose! 👻";
    }
}