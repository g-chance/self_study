import React from 'react'
import Radium from 'radium'
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

    return (
        <div>
            <h1>Hi, I'm a React App</h1>
            <button
                // style={props.style}
                onClick={props.clicked}
                alt={props.showPersons}
            > Toggle Persons
            </button>
        </div>
    );
};

export default Radium(Cockpit);