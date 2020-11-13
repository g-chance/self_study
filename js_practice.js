console.log('Be good man'.replace(new RegExp(/\s+/g), ''))

let x = '1'
let y = '2'
console.log(x, y)
console.log(x.replaceAll(' ',''))

//   ==================== setTimeout ====================

// console.log('not timed out')
// setTimeout(() => {
//     console.log('timed out')
// }, 500)


//   ==================== Spread / Destructuring ====================

// let myArr = [1,2,3,4]
// let [a, , ...c] = myArr
// console.log(a,c)

// let myObj = {a:'butts', 2:'farts', 3:3, 4:4}
// let {a: newName, ...desctructuredObj} = myObj
// let {2: newName2} = myObj
// console.log(newName, desctructuredObj)
// console.log(newName2)


//   ==================== Ternary Expressions ====================

// let x = 1 == 2 ? 1 : 2 == 3 ? 2 : 3 == 4 ? 3 : 4;
    // // Above same as below
// let x;
// if (1 == 2) {
//     x = 1;
// } else if (2 == 3) {
//     x = 2;
// } else if (3 == 4) {
//     x = 3;
// } else {
//     x = 4;
// }
// console.log(x)


//   ==================== Searching ====================

// // When to use BFS vs DFS
//If you know a solution is not far from the root of the tree:
    // Use BFS

//If the tree is very deep and solutions are rare: 
    // Likely BFS, as memory usage would be lower in a tree that's deeper than it is wide

//If the tree is very wide:
    // Likely DFS, as memory usage would be very high in a wide tree

//If solutions are frequent but located deep in the tree:
    // Use DFS

//Determining whether a path exists between two nodes:
    // Use DFS

//Finding the shortest path:
    // Use BFS


//   ==================== Recursion ====================

// function revStr(str) {
//     if (str.length === 1) {
//         return str
//     }
//     return revStr(str.slice(1, str.length)) + str[0]
// }

// console.log(revStr('yoyo mastery'))

// function fib(n) {
//     if (n < 2) {
//         return n;
//     }
//     return fib(n - 1) + fib(n - 2);
// }

// console.log(fib(4));


// // Data type conversion

// a = '10'
// console.log(a)
// console.log(5 + a)
// console.log(5 + parseInt(a))
// b = 10
// console.log(b + 5)
// console.log(b.toString() + 5)


    // 
// let test;

// function testMe() {
//     test = 'testeroo'
//     let message = `hello`
//     let huh = `gogogo`

//     function anotherTest() {
//         let test2 = `nanana`
//         console.log(message)
//     }

//     anotherTest()
//     console.log(test)
// }

// testMe();
// console.log(test);