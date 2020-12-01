const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADDPERSON':
            console.log('GETTIN HUR')
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: 'Max',
                age: Math.floor(Math.random() * 40)
            }
            return {
                ...state, persons: [...state.persons, newPerson]
            }
        case 'DELETEPERSON':
            console.log('GETTIN HUR TOO')
            const updatedPersons = [...state.persons]
            updatedPersons.splice(action.value, 1)
            return {
                ...state, persons: updatedPersons
            }
    }
    return state
}

export default reducer