const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';

let gameIsRunning = false;

const getPlayerChoice = () => {
    const selection = prompt(`${ROCK}, ${PAPER}, ${SCISSORS}`, '').toUpperCase();
    if (
        selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS
    ) {
        alert(`Invalid choice! We chose ${ROCK} for you!`);
        return ROCK;
    }
    return selection
}

const getComputerChoice = () => {
    const randomValue = Math.random() * 100;
    if (randomValue < 34) {
        return ROCK;
    } else if (randomValue < 67) {
        return PAPER;
    } else {
        return SCISSORS
    }
}

const getWinner = (cChoice, pChoice) => // {
    cChoice === pChoice 
    ? 'DRAW'
    : cChoice === ROCK && pChoice === PAPER ||
        cChoice === PAPER && pChoice === SCISSORS ||
        cChoice === SCISSORS && pChoice === ROCK
    ? 'PLAYER WINS'
    : 'COMPUTER WINS';
    // if (cChoice === pChoice) {
    //     return 'DRAW';
    // } else if (
    //     cChoice === ROCK && pChoice === PAPER || 
    //     cChoice === PAPER && pChoice === SCISSORS ||
    //     cChoice === SCISSORS && pChoice === ROCK
    // ) {
    //     return 'PLAYER WINS'
    // } else {
    //     return 'COMPUTER WINS'
    // }
// }

startGameBtn.addEventListener('click', () => {
    if (gameIsRunning) {
        return
    }
    gameIsRunning = true;
    console.log('Game is starting...');
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    const winner = getWinner(computerChoice, playerChoice);
    let message = `You picked ${playerChoice}, computer picked ${computerChoice}, you `;
    if (winner === 'DRAW') {
        message = message + `had a draw`;
    } else if (winner === 'PLAYER WINS') {
        message = message + `won`;
    } else {
        message = message + `lose`;
    }
    alert(message);
    gameIsRunning = false;
});

// not related to game

const sumUp = (callback, ...numbers) => {
    let sum = 0;
    for (const num of numbers) {
        sum += num
    }
    callback(sum);
};

const showResult = (result) => {
    alert(`The result after adding all nums is: ${result}`)
};

sumUp(showResult, 1,2,-4,6,3,-9);
sumUp(showResult, 1,2,-4,6,3,-9,88,8);