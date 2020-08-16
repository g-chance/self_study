import React from 'react'

const UserInput = props => {

    const style = {
        fontWeight: 'bold',
        border: '2px solid orange'
    }

    return (
        <input style={style} type="text" onChange={props.change} value={props.name}/>
    )
}

export default UserInput