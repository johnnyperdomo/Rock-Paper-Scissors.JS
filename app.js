// cache the dom
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3); //random numbers between 0-3; for choices
    return choices[randomNumber];
}

function convertToWord(letter) {
    switch (letter) {
        case "r":
            return "Rock";
        case "p":
            return "Paper";
        default:
            return "Scissors";
    }
}

//user wins
function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = computerScore;
    result_p.innerHTML =
        convertToWord(userChoice) +
        "(U) beats " +
        convertToWord(computerChoice) +
        "(C). You win! 🔥";
}

//user loses
function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = computerScore;
    result_p.innerHTML =
        convertToWord(computerChoice) +
        "(C) beats " +
        convertToWord(userChoice) +
        "(U). You Lose! 😢";
}

function draw(userChoice, computerChoice) {
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = computerScore;
    result_p.innerHTML =
        convertToWord(userChoice) +
        "(U) equals " +
        convertToWord(computerChoice) +
        "(C). It's a draw 🤔";
}

function game(userChoice) {
    console.log(userChoice);
    const computerChoice = getComputerChoice();

    //compare values

    console.log(userChoice, computerChoice);

    switch (userChoice + "." + computerChoice) {
        //cases where user wins
        case "r.s":
        case "p.r":
        case "s.p":
            console.log("user wins");
            win(userChoice, computerChoice);
            break;

        //cases where computer wins
        case "r.p":
        case "p.s":
        case "s.r":
            lose(userChoice, computerChoice);
            console.log("computer wins");
            break;
        default:
            draw(userChoice, computerChoice);
            console.log("draw");
            break;
    }
}

function main() {
    rock_div.addEventListener("click", () => game("r"));
    paper_div.addEventListener("click", () => game("p"));
    scissor_div.addEventListener("click", () => game("s"));
}

main();
