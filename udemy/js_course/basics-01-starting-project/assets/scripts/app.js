const defaultResult = 0
let cur = defaultResult;

function add() {
    const result = cur + userInput.value;
    cur = result
    let calcDesc = `(${defaultResult} + ${cur})`
    outputResult(result, calcDesc)
}

addBtn.addEventListener(`click`, add);