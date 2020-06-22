let test;

function testMe() {
    test = 'testeroo'
    let message = `hello`
    let huh = `gogogo`

    function anotherTest() {
        let test2 = `nanana`
        console.log(message)
    }

    anotherTest()
    console.log(test)
}

testMe();
console.log(test);