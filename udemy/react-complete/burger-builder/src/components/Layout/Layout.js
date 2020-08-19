import React from 'react'
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'

const Layout = props => {
    return (
        <>
            <div>
                <Toolbar />
            </div>
            <main className={classes.content}>
                {props.children}
            </main>
        </>
    )
}

export default Layout