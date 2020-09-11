import React from 'react'
import { useState } from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './Contactdata.module.css'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'

const ContactData = props => {

    const [state, setState] = useState({
        name: '',
        email: '',
        address: {
            street: '',
            zip: '',
        },
        loading: false
    })

    const orderHandler = e => {
        e.preventDefault()
        // alert('You continued!')
        setState({
            ...state, loading: true
        })
        const order = {
            ingredients: props.ingredients,
            price: props.price,
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
                setState({ ...state, loading: false })
                props.history.push('/')
            })
            .catch(err => {
                setState({ ...state, loading: false })
            })
    }

    let form = (
        <form action="">
            <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
            <input className={classes.Input} type="email" name="email" placeholder="Your Email" />
            <input className={classes.Input} type="text" name="street" placeholder="Street" />
            <input className={classes.Input} type="text" name="zip" placeholder="Zip" />
            <Button btnType="Success" clicked={orderHandler}>ORDER</Button>
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
