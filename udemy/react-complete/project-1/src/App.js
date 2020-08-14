import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'
import Validation from './Validation/Validation'
import Char from './Char/Char'

const App = props => {

  const [persons, setPersons] = useState({
    persons: [
      {id: 1, name: 'Max', age: 28},
      {id: 2, name: 'Manu', age: 29},
      {id: 3, name: 'Steph', age: 28},
    ],
    otherState: 'some value',
    usernames: ['Ana', 'Greg'],
    showPersons: false,
  });

  const [state, setState] = useState({
    text: ''
  })

  console.log(persons)

  // const switchNameHandler = name => {
  //   const [boomba, ...flautas] = persons.persons
  //   boomba.name = name
  //   setPersons({
  //     ...persons, persons: [boomba].concat(flautas)
  //     // persons: [
  //     //   {name: 'Maximillian', age: 28},
  //     //   {name: 'Manu', age: 29},
  //     //   {name: 'Steph', age: 28},
  //     // ]
  //   })
  // }

  const deletePersonHandler = (i) => {
    const people = [...persons.persons];
    people.splice(i, 1);
    setPersons({
      ...persons, persons: people
    })
  }

  const nameChangedHandler = (e, id) => {
    const people = [...persons.persons]
    const pIndex = people.findIndex(p => {
      console.log(p, p.id, id)
      return p.id === id
    })
    console.log(people, pIndex)
    people[pIndex].name = e.target.value;
    // console.log(boom)
    setPersons({
      ...persons, persons: people
    })
  }

  const userNameChangeHandler = e => {
    const unames = persons.usernames
    unames[0] = e.target.value
    setPersons({
      ...persons, usernames: unames
    })
  }

  const togglePersonsHandler = () => {
    const doesShow = persons.showPersons;
    setPersons({...persons, showPersons: !doesShow})
  }

  console.log(persons)

  const style = {
    backgroundColor: 'red',
    font: 'inherit',
    padding: '8px',
    border: '5px solid blue',
    cursor: 'pointer'
  }

  let people = null;

  if (persons.showPersons) {
    people = (
      <div>
        {persons.persons.map( (person, i) => {
          return <Person
          key={person.id}
          name={person.name}
          age={person.age}
          click={() => deletePersonHandler(i)}
          change={e => nameChangedHandler(e, person.id)} />
        })}
        {/* <Person 
          name={persons.persons[0].name}
          age={persons.persons[0].age} 
          click={switchNameHandler.bind(this, 'Butts')}
          />
        <Person
          name={persons.persons[1].name}
          age={persons.persons[1].age} 
          changed={nameChangedHandler}
          > My Hobbies: Racing
        </Person> */}
      </div> 
    );
  }

const textChangeHandler = e => {
  let txt = state.text;
  txt = e.target.value;
  setState({...state, text: txt})
}

const deleteCharHandler = (i) => {
  const charList = state.text.split('')
  charList.splice(i, 1)
  const charStr = charList.join('')
  setState({...state, text: charStr})
}

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>

{/* Lists and Conditionals assignment */}
      <input type="text" onChange={textChangeHandler} value={state.text}/>
      <p>{state.text.length}</p>
      <Validation length={state.text.length} />
      {
        state.text.split('').map((c, i) => {
          return (
            <Char key={i} 
              char={c} 
              click={() => deleteCharHandler(i)}
            />
          )
        })
      }

      <UserOutput name={persons.usernames[0]}/>
      <UserInput name={persons.usernames[0]} change={userNameChangeHandler}/>
      <UserOutput name={persons.usernames[1]}/>
      <button
        style={style}
        onClick={togglePersonsHandler}
      > Toggle Persons
      </button>
{/* BELOW ARE 2 WAYS OF RENDERING CONDITIONAL CODE */}
  {/* 1. (this is the best practice -- see people variable above) */}
      {people}

  {/* 2. */}
      {/* { 
        persons.showPersons ?
          <div>
            <Person 
              name={persons.persons[0].name}
              age={persons.persons[0].age} 
              click={switchNameHandler.bind(this, 'Butts')}
              />
            <Person
              name={persons.persons[1].name}
              age={persons.persons[1].age} 
              changed={nameChangedHandler}
              > My Hobbies: Racing
            </Person>
          </div> 
        : null
      } */}
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