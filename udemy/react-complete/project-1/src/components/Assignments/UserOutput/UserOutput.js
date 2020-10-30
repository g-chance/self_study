import React from 'react'
import './UserOutput.css'

const UserOutput = props => {
    return (
        <div className="UserOutput">
            <p>UO p1 {props.name}</p>
            <p>UO p2 {props.name}</p>
        </div>
    )
}

export default UserOutput