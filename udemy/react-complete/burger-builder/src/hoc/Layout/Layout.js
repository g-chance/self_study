import React, { useState } from 'react'
import classes from './Layout.module.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

const Layout = props => {
    const [state, setState] = useState({
        showSideDrawer: false
    })

    const sideDrawerClosedHandler = () => {
        setState({showSideDrawer: false})
    }
    const sideDrawerOpenHandler = () => {
        // const SSD = state.showSideDrawer
        // setState({...state, showSideDrawer: !SSD})
        setState(prevState => (
            {...prevState, showSideDrawer: !prevState.showSideDrawer}
        ))
    }

    return (
        <>
            <Toolbar open={sideDrawerOpenHandler} />
            <SideDrawer open={state.showSideDrawer} closed={sideDrawerClosedHandler} />
            <main className={classes.content}>
                {props.children}
            </main>
        </>
    )
}

export default Layout