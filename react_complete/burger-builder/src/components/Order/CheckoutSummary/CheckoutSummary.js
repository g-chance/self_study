import React from 'react'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import classes from './CheckoutSummer.module.css'

const CheckoutSummary = props => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tastes good!</h1>
            <div style={{ width: '100%', margin: 'auto' }}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button
                btnType="Danger"
                clicked={props.checkoutContinued}>CONTINUE</Button>
            <Button
                btnType="Success"
                clicked={props.checkoutCanceled}>CANCEL</Button>
        </div>
    )
}

export default CheckoutSummary
