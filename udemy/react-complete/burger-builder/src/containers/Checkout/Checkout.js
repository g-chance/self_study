import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import { useEffect } from 'react'
import ContactData from './ContactData/ContactData'

const Checkout = props => {

    const [state, setState] = useState({
        ingredients: {},
        totalPrice: 0
    })

    useEffect(() => {
        const query = new URLSearchParams(props.location.search);
        const ingredients = {}
        let price = 0
        for (let param of query.entries()) {
            if (param[0] === 'price') {
                price = param[1]
            } else {
                ingredients[param[0]] = +param[1]
            }
        }
        setState({ ingredients: ingredients, totalPrice: price })
    }, [])

    const checkoutCanceledHandler = () => {
        props.history.goBack();
    }
    const checkoutContinuedHandler = () => {
        props.history.replace(`/checkout/contact-data`)
    }

    return (
        <div>
            <CheckoutSummary
                ingredients={state.ingredients}
                checkoutCanceled={checkoutCanceledHandler}
                checkoutContinued={checkoutContinuedHandler} />
            <Route
                path={props.match.path + '/contact-data'}
                render={props => (<ContactData {...props} ingredients={state.ingredients} price={state.totalPrice} />)} />
        </div>
    )
}

export default Checkout
