import React from 'react'
import Order from '../../components/Order/Order'
import { useEffect, useState } from 'react'
import axios from '../../axios-orders'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

const Orders = () => {

    const [state, setState] = useState({
        orders: [],
        loading: true,
    })

    useEffect(() => {
        axios.get(`/orders.json`)
            .then(res => {
                const fetchedOrders = []
                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    })
                }
                setState({ orders: fetchedOrders, loading: false })
            })
            .catch(err => {
                setState({ ...state, loading: false })
            })
    }, [])

    return (
        <div>
            {state.orders.map(e => (
                <Order
                    key={e.id}
                    ingredients={e.ingredients}
                    price={+e.price} />
            ))}
        </div>
    )
}

export default withErrorHandler(Orders, axios);
