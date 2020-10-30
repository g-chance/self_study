import React from 'react'
import classes from './NavItems.module.css'
import NavItem from './NavItem/NavItem'

const NavItems = () => (
    <ul className={classes.NavItems}>
        <NavItem link='/' exact>Burger Builder</NavItem>
        <NavItem link='/orders'>Orders</NavItem>
    </ul>
)

export default NavItems
