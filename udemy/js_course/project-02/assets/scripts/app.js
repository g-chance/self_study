const PLAYER_ATTACK = 10;
const PLAYER_STRONG_ATTACK = 17;
const MONST_ATTACK = 14;

let maxLife = 100;
let currentMonsterHealth = maxLife;
let currentPlayerHealth = maxLife;

adjustHealthBars(maxLife);

function attackMonster(attackType) {
    let maxDamage;
    if (attackType === `attack`) {
        maxDamage = PLAYER_ATTACK;
    } else {
        maxDamage = PLAYER_STRONG_ATTACK;
    }
    const monstDamage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= monstDamage;
    const playerDamage = dealPlayerDamage(MONST_ATTACK);
    currentPlayerHealth -= playerDamage;
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert(`YOU WON!`);
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert(`YOU LOST!`);
    } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
        alert(`IT'S A DRAW!`)
    }
}

function attackHandler() {
    attackMonster('attack')
}

function strongAttackHandler() {
    attackMonster('strong attack')
}

attackBtn.addEventListener(`click`, attackHandler);
strongAttackBtn.addEventListener(`click`, strongAttackHandler);