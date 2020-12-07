import React from 'react';
import './Person.css';
import styled from 'styled-components';
// import Radium from 'radium';

const StyledDiv = styled.div`
    background-color: pink;
    width: 60%;
    margin: 16px auto;
    border: 1px solid black;
    padding: 16px;
    box-shadow: 0 2px 3px gray;

    @media (min-width: 500px): {
        width: '450px'
    }
`;

const Person = props => {
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // }
    return (
        // <div className='Person' style={style}>
        <StyledDiv>
            <p onClick={props.click} >I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name}/>
        </StyledDiv>
        // </div>
    )
}

export default Person;