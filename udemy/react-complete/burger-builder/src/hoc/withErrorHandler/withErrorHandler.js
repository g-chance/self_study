import React, { useEffect, useState } from 'react'
import Modal from '../../components/UI/Modal/Modal'
import axios from 'axios'

const withErrorHandler = (WrappedComponent, axios) => {
    return props => {

        const [state, setState] = useState({
            error: null
        })

        useEffect(() => {
            axios.interceptors.request.use(req => {
                setState({ error: null })
                return req
            })
            axios.interceptors.response.use(res => res, error => {
                setState({ error: error })
            })
        }, [])

        const errorConfirmedHandler = () => {
            setState({ error: null })
        }

        return (
            <>
                <Modal
                    show={state.error}
                    modalClosed={errorConfirmedHandler}
                >
                    {state.error ? state.error.message : null}
                </Modal>
                <WrappedComponent {...props} />
            </>
        )
    }
}

export default withErrorHandler