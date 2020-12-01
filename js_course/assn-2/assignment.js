const task3Element = document.getElementById('task-3');

// Task 1
function alert1() {
    alert('this is my alert1 function');
}

function alert2(name) {
    alert(`Hi ${name}`);
}

// Task 2
alert1();
alert2('Gorgy');

// Task 3
task3Element.addEventListener(`click`, alert1);

// Task 4
function concatStr(s1, s2, s3) {
    return `${s1} ${s2} ${s3}`
}

// Task 5
alert(concatStr('best', 'string', 'ever'));