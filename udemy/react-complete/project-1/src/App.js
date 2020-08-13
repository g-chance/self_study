import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {

  const [persons, setPersons] = useState({
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Steph', age: 28},
    ],
    otherState: 'some value',
  });

  console.log(persons)

  const switchNameHandler = () => {
    const [boomba, ...flautas] = persons.persons
    boomba.name = 'Maximillian'
    setPersons({
      persons: [boomba].concat(flautas), ...persons
      // persons: [
      //   {name: 'Maximillian', age: 28},
      //   {name: 'Manu', age: 29},
      //   {name: 'Steph', age: 28},
      // ]
    })
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person name={persons.persons[0].name} age={persons.persons[0].age} />
      <Person name='Manu' age='29'>
        My Hobbies: Racing
      </Person>
    </div>
  );
  // // The below code is what the jsx above is compiled to
  //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'))
}

export default App;

// state = {
//   persons: [
//     {name: 'Max', age: 28},
//     {name: 'Manu', age: 29},
//     {name: 'Steph', age: 28},
//   ],
//   otherState: 'some value',
// }

// switchNameHandler = () => {
//   this.setState({
//     persons: [
//       {name: 'Maximillian', age: 28},
//       {name: 'Manu', age: 29},
//       {name: 'Steph', age: 28},
//     ]
//   })
// }