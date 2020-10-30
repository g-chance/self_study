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

function calculateResult(calcType) {
    if (
        calcType !== 'ADD' && calcType !== 'SUBTRACT' 
        && calcType !== 'MULTIPLY' && calcType !== 'DIVIDE'
        || !parseInt(userInput.value)
    ) {
        return;
    }

    let init = cur;
    let mathOperator;
    if (calcType === 'ADD') {
        cur += parseInt(userInput.value);
        mathOperator = '+';
    } else if (calcType === 'SUBTRACT') {
        cur -= parseInt(userInput.value);
        mathOperator = '-';
    } else if (calcType === 'MULTIPLY') {
        cur *= parseInt(userInput.value);
        mathOperator = '*';
    } else if (calcType === 'DIVIDE') {
        cur /= parseInt(userInput.value);
        mathOperator = '/';
    }

    createAndWriteLog(mathOperator, init, userInput.value)
    writeToLog(calcType, init, userInput.value, cur)
}

function add() {
    calculateResult('ADD');
}

function subtract() {
    calculateResult('SUBTRACT');
}

function multiply() {
    calculateResult('MULTIPLY');
}

function divide() {
    calculateResult('DIVIDE');
}

addBtn.addEventListener(`click`, add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);