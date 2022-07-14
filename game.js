const playerScore = document.querySelector(".score-game");
const playerChoice = document.querySelector(".player-choice");
const cpuChoice = document.querySelector(".cpu-choice");
const resultMatch = document.querySelector(".result");
const btnNewMatch = document.querySelector(".btnNewMatch");

const arrayChoices = document.querySelectorAll(".choice");

const playerChoiceImg = document.querySelector(".player-choice-Img");
const cpuChoiceImg = document.querySelector(".cpu-choice-Img");

let player;
let computer;
let score = 0;

const incrementScore = () => {
	score++;
	playerScore.textContent = score;
	resultMatch.textContent = "¡You Win!";
};

const decrementScore = () => {
	score--;
	playerScore.textContent = score;
	resultMatch.textContent = "¡You Lose!";
};

const resetGame = () => {
	score = 0;
	playerScore.textContent = score;
	resultMatch.textContent = "Waiting for your Choice";
	playerChoice.style.borderColor = "#565468";
	cpuChoice.style.borderColor = "#565468";
	btnNewMatch.style.opacity = 0;
	btnNewMatch.style.pointerEvents = "none";
	playerChoiceImg.src = "";
	cpuChoiceImg.src = "";
};

btnNewMatch.addEventListener("click", resetGame);

const cpuRandomChoice = () => {
	let randomChoice = Math.floor(Math.random() * 3) + 1;

	switch (randomChoice) {
		case 1:
			computer = "rock";
			cpuColor = "#de3a5a";
			break;
		case 2:
			computer = "paper";
			cpuColor = "#eca81e";
			break;
		case 3:
			computer = "scissors";
			cpuColor = "#516ef4";
			break;
	}
	return computer;
};

const checkWinner = () => {
	if (player == computer) {
		resultMatch.textContent = "¡Draw!";
	} else if (player == "rock") {
		computer == "scissors" ? incrementScore() : decrementScore();
	} else if (player == "paper") {
		computer == "rock" ? incrementScore() : decrementScore();
	} else if (player == "scissors") {
		computer == "paper" ? incrementScore() : decrementScore();
	}
};

arrayChoices.forEach((choice, index) => {
	choice.addEventListener("click", () => {
		let color;

		if (index == [0]) {
			player = "rock";
			color = "#de3a5a";
		} else if (index == [1]) {
			player = "paper";
			color = "#eca81e";
		} else if (index == [2]) {
			player = "scissors";
			color = "#516ef4";
		}

		cpuRandomChoice();
		checkWinner();

		playerChoice.style.borderColor = color;
		cpuChoice.style.borderColor = cpuColor;
		playerChoiceImg.src = choice.src;
		cpuChoiceImg.src = `./img/icon-${computer}.svg`;
		btnNewMatch.style.opacity = 1;
		btnNewMatch.style.pointerEvents = "all";
	});
});
