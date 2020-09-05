import React, { useState, useEffect } from 'react'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-orders'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 1,
    meat: 2,
    bacon: 1,
}

const BuilderBuilder = () => {

    const [state, setState] = useState({
        ingredients: null,
        totalPrice: 4,
        purchasing: false,
        loading: false,
    })

    useEffect(() => {
        axios.get(`https://react-my-burger-478c9.firebaseio.com/Ingredients.json`)
            .then(resp => {
                setState({ ...state, ingredients: resp.data })
            })
            .catch(err => console.error(err))
    }, [])

    const addIngredientHandler = type => {
        const oldCount = state.ingredients[type];
        const updatedCount = oldCount + 1
        const updatedIngredients = {
            ...state.ingredients
        }
        updatedIngredients[type] = updatedCount
        const priceAddition = INGREDIENT_PRICES[type]
        const oldPrice = state.totalPrice
        const newPrice = oldPrice + priceAddition
        setState({
            ...state,
            ingredients: updatedIngredients,
            totalPrice: newPrice
        })
    }
    const removeIngredientHandler = type => {
        if (state.ingredients[type] === 0) {
            return
        }
        const oldCount = state.ingredients[type]
        const updatedCount = oldCount - 1
        const updatedIngredients = {
            ...state.ingredients
        }
        updatedIngredients[type] = updatedCount
        const priceDeduction = INGREDIENT_PRICES[type]
        const oldPrice = state.totalPrice
        const newPrice = oldPrice - priceDeduction
        setState({
            ...state,
            ingredients: updatedIngredients,
            totalPrice: newPrice
        })
    }
    const purchaseHandler = () => {
        setState({
            ...state, purchasing: true
        })
    }
    const purchaseCancelHandler = () => {
        setState({
            ...state, purchasing: false
        })
    }
    const purchaseContinueHandler = () => {
        // alert('You continued!')
        setState({
            ...state, loading: true
        })
        const order = {
            ingredients: state.ingredients,
            price: state.totalPrice,
            customer: {
                name: 'Grep',
                address: {
                    street: 'Place 101',
                    zip: 12345
                },
                email: 'grep@grep.com',
            },
            deliveryMethod: 'superSlow'
        }
        axios.post('/orders.json', order)
            .then(resp => {
                setState({ ...state, loading: false, purchasing: false })
            })
            .catch(err => {
                setState({ ...state, loading: false, purchasing: false })
            })
    }

    const amounts = { ...state.ingredients }
    
    let orderSummary = null
    let burger = <Spinner />

    if (state.ingredients) {
        burger = (
            <>
                <Burger ingredients={state.ingredients} />
                <BuildControls
                    ingredientAdded={addIngredientHandler}
                    ingredientRemoved={removeIngredientHandler}
                    amounts={amounts}
                    price={state.totalPrice}
                    ordered={purchaseHandler}
                />
            </>
        )
        orderSummary = <OrderSummary
            ingredients={state.ingredients}
            purchaseCanceled={purchaseCancelHandler}
            purchaseContinued={purchaseContinueHandler}
            price={state.totalPrice} />
    }
    if (state.loading) {
        orderSummary = <Spinner />
    }

    return (
        <>
            <Modal show={state.purchasing} modalClosed={purchaseCancelHandler}>
                {orderSummary}
            </Modal>
            {burger}
        </>
    )
}

export default withErrorHandler(BuilderBuilder, axios)
