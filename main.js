let userChoice = null;

let computerChoice = null;

let winner = null;

let itemSelectScreen = null;

let resultScreen = null;

window.onload = () => {
itemSelectScreen = document.getElementById("itemSelectScreen");

resultScreen = document.getElementById("resultScreen");
}

function gameController(event) {
  getUserChoice(event);
  displayWinner();
}

function getUserChoice(event) {
  userChoice = event.target.id;
  console.log(userChoice);
  determineWinner();
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);

  computerChoice = choices[randomNumber];
}

function determineWinner() {
  if (userChoice === computerChoice) {
    winner = "tie";
  }
  //User win conditions
  if (userChoice === "paper" && computerChoice === "rock") {
    winner = "user";
  }
  if (userChoice === "rock" && computerChoice === "scissors") {
    winner = "user";
  }
  if (userChoice === "scissors" && computerChoice === "paper") {
    winner = "user";
  }

  //Computer win conditions
  if (computerChoice === "paper" && userChoice === "rock") {
    winner = "computer";
  }
  if (computerChoice === "rock" && userChoice === "scissors") {
    winner = "computer";
  }
  if (computerChoice === "scissors" && userChoice === "paper") {
    winner = "computer";
  }

  console.log(winner);
}

function displayWinner() {
  const resultText = document.createElement("h3");
  const resultImg = document.createElement("img");

  resultText.innerText = `User's Choice:${userChoice} Computer's Choice:${computerChoice}`;
  resultImg.setAttribute("src", `./images/${winner}.png`);

  console.dir(resultScreen);
  resultScreen.appendChild(resultText);
  resultScreen.appendChild(resultImg);

  itemSelectScreen.style.setProperty("display", "none");
  resultScreen.style.setProperty("display", "initial");
}

getComputerChoice();

console.log(userChoice);
console.log(computerChoice);
console.log(winner);
console.log(itemSelectScreen);
console.log(resultScreen);
