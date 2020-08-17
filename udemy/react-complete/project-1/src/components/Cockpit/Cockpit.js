import React from 'react'
import Radium from 'radium'
import classes from './Cockpit.css'
// import styled from 'styled-components'

// const StyledButton = styled.button`
//     background-color: ${props => props.alt ? 'red' : 'green'};
//     color: white;
//     font: inherit;
//     padding: 8px;
//     cursor: pointer;

//     &:hover {
//     background-color: ${props => props.alt ? 'pink' : 'lightgreen'};
//     color: black;
//     }
// `;

const Cockpit = props => {

    let btnClass = [classes.button]

    if (props.showPersons) {
        btnClass.push(classes.red)
    }
    // style[':hover'] = {
    //     backgroundColor: 'pink',
    //     color: 'black'
    // }

    const assignedClasses = [];
    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div>
            <h1>Hi, I'm a React App</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button className={btnClass.join(' ')}
                // style={props.style}
                onClick={props.clicked}
                alt={props.showPersons}
            > Toggle Persons
            </button>
        </div>
    );
};

export default Radium(Cockpit);