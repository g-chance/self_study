import React from 'react'

const Validation = props => {

    let msg;
    if (props.length > 0 && props.length < 5) {
        msg = <p>Text too short</p>
    } else if (props.length === 5) {
        msg = (<p>Text juuuust right</p>)
    } else if (props.length > 5) {
        msg = <p>Text too long</p>
    }

    return (
        <div>
            {msg}
        </div>
    )
}

export default Validation