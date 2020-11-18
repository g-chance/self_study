import React, { useState, useEffect } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

const BuilderBuilder = props => {

    const [state, setState] = useState({
        // ingredients: null,
        // totalPrice: 4,
        purchasing: false,
        loading: false,
    });

    // useEffect(() => {
    //     axios.get(`https://react-my-burger-478c9.firebaseio.com/Ingredients.json`)
    //         .then(resp => {
    //             setState({ ...state, ingredients: resp.data })
    //         })
    //         .catch(err => console.error(err))
    // }, [])

    // const addIngredientHandler = type => {
    //     const oldCount = state.ingredients[type];
    //     const updatedCount = oldCount + 1;
    //     const updatedIngredients = {
    //         ...state.ingredients
    //     };
    //     updatedIngredients[type] = updatedCount;
    //     const priceAddition = INGREDIENT_PRICES[type];
    //     const oldPrice = props.price;
    //     const newPrice = oldPrice + priceAddition;
    //     setState({
    //         ...state,
    //         ingredients: updatedIngredients,
    //         totalPrice: newPrice
    //     });
    // };
    // const removeIngredientHandler = type => {
    //     if (state.ingredients[type] === 0) {
    //         return;
    //     }
    //     const oldCount = state.ingredients[type];
    //     const updatedCount = oldCount - 1;
    //     const updatedIngredients = {
    //         ...state.ingredients
    //     };
    //     updatedIngredients[type] = updatedCount;
    //     const priceDeduction = INGREDIENT_PRICES[type];
    //     const oldPrice = props.price;
    //     const newPrice = oldPrice - priceDeduction;
    //     setState({
    //         ...state,
    //         ingredients: updatedIngredients,
    //         totalPrice: newPrice
    //     });
    // };
    const purchaseHandler = () => {
        setState({
            ...state, purchasing: true
        });
    };
    const purchaseCancelHandler = () => {
        setState({
            ...state, purchasing: false
        });
    };
    const purchaseContinueHandler = () => {
        const queryParams = [];
        for (let i in state.ingredients) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(state.ingredients[i]));
        }
        queryParams.push('price=' + props.price);
        const queryString = queryParams.join('&');
        props.history.push({
            pathname: `/checkout`,
            search: `?${queryString}`
        });
    };

    const amounts = { ...props.ings };

    let orderSummary = null;
    let burger = <Spinner />;

    if (props.ings) {
        burger = (
            <>
                <Burger ingredients={props.ings} />
                <BuildControls
                    ingredientAdded={props.onIngredientAdded}
                    ingredientRemoved={props.onIngredientRemoved}
                    amounts={amounts}
                    price={props.price}
                    ordered={purchaseHandler}
                />
            </>
        );
        orderSummary = <OrderSummary
            ingredients={props.ings}
            purchaseCanceled={purchaseCancelHandler}
            purchaseContinued={purchaseContinueHandler}
            price={props.price} />;
    }
    if (state.loading) {
        orderSummary = <Spinner />;
    }

    return (
        <>
            <Modal show={state.purchasing} modalClosed={purchaseCancelHandler}>
                {orderSummary}
            </Modal>
            {burger}
        </>
    );
};

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => {
            dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientName: ingName });
        },
        onIngredientRemoved: (ingName) => dispatch({ type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BuilderBuilder, axios));
