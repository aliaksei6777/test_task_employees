import {applyMiddleware, combineReducers, createStore} from "redux"
import {ActionsType, employeesReducer} from "./employeesReducer"
import thunk, {ThunkAction} from "redux-thunk";


const rootReducer = combineReducers({
    employees: employeesReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootStateType = ReturnType<typeof rootReducer>
export type AppThunk<ReturnType = void> = ThunkAction<void,RootStateType,unknown,ActionsType>
