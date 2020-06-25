const defaultResult = 0
let cur = defaultResult;

function createAndWriteLog(operator, resultBeforeCalc, calcNumber) {
    let calcDesc = `${resultBeforeCalc} ${operator} ${calcNumber}`
    outputResult(cur, calcDesc)
}

function add() {
    let init = cur
    cur = cur + parseInt(userInput.value);
    createAndWriteLog('+', init, userInput.value) 
}

function subtract() {
    let calcDesc = `(${cur} - ${userInput.value})`
    cur = cur - parseInt(userInput.value);
    outputResult(cur, calcDesc)
}

function multiply() {
    let calcDesc = `(${cur} * ${userInput.value})`
    cur = cur * parseInt(userInput.value);
    outputResult(cur, calcDesc)
}

function divide() {
    let calcDesc = `(${cur} / ${userInput.value})`
    cur = cur / parseInt(userInput.value);
    outputResult(cur, calcDesc)
}

addBtn.addEventListener(`click`, add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);