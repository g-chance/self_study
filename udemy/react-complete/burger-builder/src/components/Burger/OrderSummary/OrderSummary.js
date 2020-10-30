import React from 'react'
import Button from '../../UI/Button/Button'

const OrderSummary = props => {

    const ingredientSummary = Object.keys(props.ingredients)
        .map((el, i) => (
            <li key={el+i}><span style={{textTransform: 'capitalize'}}>{el}: {props.ingredients[el]}</span></li>
        ))
    return (
        <>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType='Danger' clicked={props.purchaseCanceled}>CANCEL</Button>
            <Button btnType='Success' clicked={props.purchaseContinued}>SUBMIT</Button>
        </>
    )
}

export default OrderSummary