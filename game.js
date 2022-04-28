const playerScore = document.querySelector(".score");
const playerChoice = document.querySelector(".playerChoice");
const cpuChoice = document.querySelector(".cpuChoice");
const btnTryAgain = document.querySelector(".btnTryAgain");
const resultMatch = document.querySelector(".result");

const rockChoice = document.querySelector(".rockChoice");
const paperChoice = document.querySelector(".paperChoice");
const scissorsChoice = document.querySelector(".scissorsChoice");

const arrayChoices = [rockChoice, paperChoice, scissorsChoice];

const choiceOne = document.querySelector(".choiceOne");
const choiceTwo = document.querySelector(".choiceTwo");

let player;
let computer;
let score = 0;

const incrementScore = () => {
	resultMatch.innerHTML = "¡You Win!";
	score++;
	playerScore.textContent = score;
};

const decrementScore = () => {
	resultMatch.innerHTML = "¡You Lose!";
	score--;
	playerScore.textContent = score;
};

const resetScore = () => {
	resultMatch.innerHTML = "Waiting for your Choice";
	score = 0;
	playerScore.textContent = score;
};

btnTryAgain.addEventListener("click", resetScore);

const cpuRandomChoice = () => {
	let randomChoice = Math.floor(Math.random() * 3) + 1;

	switch (randomChoice) {
		case 1:
			computer = "rock";
			break;
		case 2:
			computer = "paper";
			break;
		case 3:
			computer = "scissors";
			break;
	}
	return computer;
};

const checkWinner = () => {
	if (player == computer) {
		resultMatch.innerHTML = "¡Draw!";
		return "¡Draw!";
	} else if (player == "rock") {
		return computer == "scissors" ? incrementScore() : decrementScore();
	} else if (player == "paper") {
		return computer == "rock" ? incrementScore() : decrementScore();
	} else if (player == "scissors") {
		return computer == "paper" ? incrementScore() : decrementScore();
	}
};

arrayChoices.forEach((choice, index) => {
	choice.addEventListener("click", () => {
		choiceOne.src = choice.src;

		if (index == [0]) {
			player = "rock";
		} else if (index == [1]) {
			player = "paper";
		} else if (index == [2]) {
			player = "scissors";
		}
		cpuRandomChoice();
		console.log(checkWinner());
		choiceTwo.src = `./img/icon-${computer}.svg`;
	});
});
