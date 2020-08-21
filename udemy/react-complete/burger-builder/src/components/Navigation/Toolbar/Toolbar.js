import React from 'react'
import classes from './Toolbar.module.css'
import Logo from '../../../components/Logo/Logo'
import NavItems from '../NavItems/NavItems'
import Button from '../../UI/Button/Button'

const Toolbar = props => (
    <header className={classes.Toolbar}>
        <Button clicked={props.open}>
            <div></div>
            <div></div>
            <div></div>
        </Button>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavItems />
        </nav>
    </header>
)

export default Toolbar
