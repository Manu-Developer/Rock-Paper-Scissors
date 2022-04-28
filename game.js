const playerScore = document.querySelector(".scoreGame");
const playerChoice = document.querySelector(".playerChoice");
const cpuChoice = document.querySelector(".cpuChoice");
const resultMatch = document.querySelector(".result");
const btnNewMatch = document.querySelector(".btnNewMatch");

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
	playerChoice.style.borderColor = "#565468";
	cpuChoice.style.borderColor = "#565468";
	btnNewMatch.style.display = "none";
	choiceOne.src = "";
	choiceTwo.src = "";
	score = 0;
	playerScore.textContent = score;
	resultMatch.textContent = "Waiting for your Choice";
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
		return computer == "scissors" ? incrementScore() : decrementScore();
	} else if (player == "paper") {
		return computer == "rock" ? incrementScore() : decrementScore();
	} else if (player == "scissors") {
		return computer == "paper" ? incrementScore() : decrementScore();
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

		btnNewMatch.style.display = "block";
		playerChoice.style.borderColor = color;
		cpuChoice.style.borderColor = cpuColor;
		choiceOne.src = choice.src;
		choiceTwo.src = `./img/icon-${computer}.svg`;
	});
});
