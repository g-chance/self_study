import React, { useState } from 'react';
import './App.css';
// import Radium, { StyleRoot } from 'radium'
// import Person from '../components/Persons/Person/Person';
// import UserInput from '../components/Assignments/UserInput/UserInput'
// import UserOutput from '../components/Assignments/UserOutput/UserOutput'
// import Validation from '../components/Validation/Validation'
// import Char from '../components/Assignments/Char/Char'
import Cockpit from '../components/Cockpit/Cockpit'
import Persons from '../components/Persons/Persons'

const App = props => {

  const [persons, setPersons] = useState({
    persons: [
      {id: 1, name: 'Max', age: 28},
      {id: 2, name: 'Manu', age: 29},
      {id: 3, name: 'Steph', age: 28},
    ],
    // otherState: 'some value',
    showPersons: false,
    // usernames: ['Ana', 'Greg'],
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

  const togglePersonsHandler = () => {
    const doesShow = persons.showPersons;
    setPersons({...persons, showPersons: !doesShow})
  }

  // console.log(persons)

  let people = null;

  if (persons.showPersons) {
    people = (
      <div>
        <Persons 
          persons={persons.persons}
          clicked={deletePersonHandler}
          changed={nameChangedHandler}
        />
        {/* ===== Code before refactoring */}
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
    // style.backgroundColor = 'red';
    // style[':hover'] = {
    //   backgroundColor: 'pink',
    //   color: 'black'
    // }
  }

  let classes = [];
  if (persons.persons.length <= 2) {
    classes.push('red');
  }
  if (persons.persons.length <= 1) {
    classes.push('bold');
  }

// ===== Part of Assignment

// const userNameChangeHandler = e => {
//   const unames = persons.usernames
//   unames[0] = e.target.value
//   setPersons({
//     ...persons, usernames: unames
//   })
// }

// const textChangeHandler = e => {
//   let txt = state.text;
//   txt = e.target.value;
//   setState({...state, text: txt})
// }

// const deleteCharHandler = (i) => {
//   const charList = state.text.split('')
//   charList.splice(i, 1)
//   const charStr = charList.join('')
//   setState({...state, text: charStr})
// }

  return (
    // <StyleRoot>
    <div className="App">
      <p className={classes.join(' ')}>This is really working!</p>
      <Cockpit
        showPersons={persons.showPersons}
        clicked={togglePersonsHandler}
        // style={style}
      />
      {/* ===== BELOW ARE 2 WAYS OF RENDERING CONDITIONAL CODE */}
      {/* ===== 1. (this is the best practice -- see people variable above) */}
      {people}
      
      {/* ===== 2. */}
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

      {/* ===== Assignments ===== */}
      {/* <input type="text" onChange={textChangeHandler} value={state.text}/>
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
      <UserOutput name={persons.usernames[1]}/> */}

    </div>
    // </StyleRoot>
  );
  // ===== The below code is what the jsx above is compiled to =====
  //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'))
}

export default App;


// ===== Example of state in a class component =====
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