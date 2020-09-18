import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import userReducer from '../Reducers/userReducer'
import customerReducer from '../Reducers/customerReducer'
import departmentReducer from '../Reducers/departmentReducer'
import employeeReducer from '../Reducers/employeeReducer'
import ticketReducer from '../Reducers/ticketReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        user: userReducer,
        customer: customerReducer,
        department: departmentReducer,
        employee: employeeReducer,
        ticket: ticketReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore