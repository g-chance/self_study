import React from 'react'
import { useState } from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './Contactdata.module.css'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input'

const ContactData = props => {

    const [state, setState] = useState({
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
            },
            zip: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Zip'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5,
                },
                valid: false,
                touched: false,
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'fastest', displayValue: 'Fastest' },
                        { value: 'cheapest', displayValue: 'Cheapest' }
                    ]
                },
                validation: {
                    required: false,
                },
                value: 'fastest',
                valid: true
            },
        },
        formIsValid: false,
        loading: false
    })

    const orderHandler = e => {
        e.preventDefault()
        // alert('You continued!')
        setState({
            ...state, loading: true
        })
        const formData = {}
        for (let fieldName in state.orderForm) {
            formData[fieldName] = state.orderForm[fieldName].value
        }
        const order = {
            ingredients: props.ingredients,
            price: props.price,
            orderData: formData
        }
        axios.post('/orders.json', order)
            .then(resp => {
                setState({ ...state, loading: false })
                props.history.push('/')
            })
            .catch(err => {
                setState({ ...state, loading: false })
            })
    }
    const inputChangedHandler = (e, name) => {
        const formElement = {...state.orderForm[name]}
        formElement.value = e.target.value
        formElement.valid = checkValidity(formElement.value, formElement.validation)
        formElement.touched = true

        setState({
            ...state,
            orderForm: {
                ...state.orderForm,
                [name]: formElement
            }
        })
    }
    const checkValidity = (value, rules) => {
        let isValid = true
        
        if (rules.required) {
            isValid = value.trim() !== '' && isValid
        }
        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }
        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        return isValid
    }

    const formElementsArray = []
    for (let key in state.orderForm) {
        formElementsArray.push({
            id: key,
            config: state.orderForm[key]
        })
    }
    let formIsValid = true
    for (let key in state.orderForm) {
        if (!state.orderForm[key].valid) {
            formIsValid = false
            break
        }
    }
    let form = (
        <form onSubmit={orderHandler}>
            {formElementsArray.map(el => (
                <Input
                    key={el.id}
                    elementType={el.config.elementType}
                    elementConfig={el.config.elementConfig}
                    value={el.config.value}
                    invalid={!el.config.valid}
                    shouldValidate={el.config.validation}
                    touched={el.config.touched}
                    changed={e => inputChangedHandler(e, el.id)} />
            ))}
            <Button btnType="Success" clicked={orderHandler} disabled={!formIsValid}>ORDER</Button>
        </form>);
    if (state.loading) {
        form = <Spinner />
    }

    return (
        <div className={classes.ContactData}>
            <h4>Enter your Contact Data</h4>
            {form}
        </div>
    )
}

export default ContactData
