const defaultResult = 0
let cur = defaultResult;
let log = [];

function createAndWriteLog(operator, resultBeforeCalc, calcNumber) {
    let calcDesc = `${resultBeforeCalc} ${operator} ${calcNumber}`
    outputResult(cur, calcDesc)
}

function writeToLog(opId, prevRes, opNum, newRes) {
    const logEntry = {
        operation: opId,
        prevResult: prevRes,
        number: opNum,
        result: newRes
    };
    log.push(logEntry)
    console.log(log)
}

function add() {
    let init = cur
    cur = cur + parseInt(userInput.value);
    createAndWriteLog('+', init, userInput.value)
    writeToLog('ADD', init, userInput.value, cur)
}

function subtract() {
    let init = cur
    let calcDesc = `(${cur} - ${userInput.value})`
    cur = cur - parseInt(userInput.value);
    outputResult(cur, calcDesc)
    writeToLog('SUB', init, userInput.value, cur)
}

function multiply() {
    let init = cur
    let calcDesc = `(${cur} * ${userInput.value})`
    cur = cur * parseInt(userInput.value);
    outputResult(cur, calcDesc)
    writeToLog('MUL', init, userInput.value, cur)
}

function divide() {
    let init = cur
    let calcDesc = `(${cur} / ${userInput.value})`
    cur = cur / parseInt(userInput.value);
    outputResult(cur, calcDesc)
    writeToLog('DIV', init, userInput.value, cur)
}

addBtn.addEventListener(`click`, add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);