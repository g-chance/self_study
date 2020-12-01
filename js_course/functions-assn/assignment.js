// const sayHello = name => {
//   console.log('Hi ' + name);
// }
// const sayHello = (msg, name) => {
//   console.log(msg + name);
// }
const sayHello = (msg='Hello', name) => {
  console.log(msg + ' ' + name);
}
// const sayHello = () => {
//   console.log('Hi ' + 'name');
// }
// const sayHello = name => 'Hi ' + name;

const setInput = (callback, ...strings) => {
  for (const str of strings) {
    if (!str) {
      return;
    }
    callback(strings);
  }
}
const myCallback = (strings) => {
  for (const str of strings) {
    console.log(str);
  }
}

sayHello();
setInput(myCallback, '', 'b', 'c', 'd');