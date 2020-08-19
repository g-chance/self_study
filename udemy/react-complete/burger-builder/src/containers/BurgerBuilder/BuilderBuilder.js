import React, { useState } from 'react'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 1,
    meat: 2,
    bacon: 1,
}

const BuilderBuilder = () => {

    const [state, setState] = useState({
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasing: false,
    })

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
        alert('You continued!')
    }

    const amounts = {...state.ingredients}

    return (
        <>
            <Modal show={state.purchasing} modalClosed={purchaseCancelHandler}>
                <OrderSummary 
                    ingredients={state.ingredients}
                    purchaseCanceled={purchaseCancelHandler}
                    purchaseContinued={purchaseContinueHandler} 
                    price={state.totalPrice}/>
            </Modal>
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
}

export default BuilderBuilder
