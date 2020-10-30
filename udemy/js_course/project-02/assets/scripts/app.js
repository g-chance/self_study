const PLAYER_ATTACK = 10;
const PLAYER_STRONG_ATTACK = 17;
const MONST_ATTACK = 20;
const HEAL = 15;

const TYPE_ATTACK = `ATTACK`;
const TYPE_STRONG_ATTACK = `STRONG_ATTACK`;
const LOG_PLAYER_ATTACK = `PLAYER_ATTACK`;
const LOG_PLAYER_STRONG_ATTACK = `PLAYER_STRONG_ATTACK`;
const LOG_MONSTER_ATTACK = `MONSTER_ATTACK`;
const LOG_HEAL = `HEAL`;
const LOG_GAME_OVER = `GAME_OVER`;


const enteredValue = prompt(`Enter starting life for you and the monster.`, `100`)

let maxLife = parseInt(enteredValue);
let battleLog = [];

if (isNaN(maxLife) || maxLife <= 0) {
    maxLife = 100;
}

let currentMonsterHealth = maxLife;
let currentPlayerHealth = maxLife;
let hasBonusLife = true;

adjustHealthBars(maxLife);

function writeToLog(event, value, monsterHealth, playerHealth) {
    let logEntry = {
        event: event,
        value: value,
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth
    }
    if (event === LOG_PLAYER_ATTACK) {
        logEntry.target = `MONSTER`;
    }
    battleLog.push(logEntry);
}

function reset() {
    currentMonsterHealth = maxLife;
    currentPlayerHealth = maxLife;
    resetGame(maxLife);
}

function endRound() {
    const initialPlayerHealth = currentPlayerHealth;
    const playerDamage = dealPlayerDamage(MONST_ATTACK);
    currentPlayerHealth -= playerDamage;

    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert(`YOU WON!`);
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        if (hasBonusLife) {
            hasBonusLife = false;
            removeBonusLife();
            currentPlayerHealth = initialPlayerHealth;
            setPlayerHealth(initialPlayerHealth);
            alert(`YOU USED YOUR BONUS LIFE!`)
        } else {
            alert(`YOU LOST!`);
        }
    } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
        alert(`IT'S A DRAW!`)
    }

    if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
        reset();
    }
}

function attackMonster(attackType) {
    const maxDamage = attackType === TYPE_ATTACK ? PLAYER_ATTACK : PLAYER_STRONG_ATTACK;
    // if (attackType === TYPE_ATTACK) {
    //     maxDamage = PLAYER_ATTACK;
    // } else {
    //     maxDamage = PLAYER_STRONG_ATTACK;
    // }
    const monstDamage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= monstDamage;
    writeToLog(
        LOG_PLAYER_ATTACK,
        monstDamage,
        currentMonsterHealth,
        currentPlayerHealth
    )
    endRound();
}

function attackHandler() {
    attackMonster(TYPE_ATTACK)
}

function strongAttackHandler() {
    attackMonster(TYPE_STRONG_ATTACK)
}

function healHandler() {
    let healValue;
    if (currentPlayerHealth >= maxLife - HEAL) {
        healValue = maxLife - currentPlayerHealth;
    } else {
        healValue = HEAL;
    }
    increasePlayerHealth(healValue);
    currentPlayerHealth += healValue
    endRound();
}

function printLogHandler() {
    console.log(battleLog);
}

attackBtn.addEventListener(`click`, attackHandler);
strongAttackBtn.addEventListener(`click`, strongAttackHandler);
healBtn.addEventListener(`click`, healHandler)
logBtn.addEventListener(`click`, printLogHandler)