import {api, UserType} from "../api/api";
import {AppThunk} from "./store";

const initialState = {
    users: [] as UserType[],
    isFetching: false
}

export const employeesReducer = (state: initialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "SET-EMPLOYEES":
            return {...state, users: action.users}
        case "ADD-EMPLOYEE":
            return {...state, users: [...state.users, action.user]}
        case "REMOVE-EMPLOYEE":
            return {...state, users: state.users.filter(u => u.id !== action.id)}
        case "TOGGLE-IS-FETCHING":
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}

export const setEmployees = (users: Array<UserType>) => ({type: "SET-EMPLOYEES", users} as const)
export const addEmploy = (user: UserType) => ({type: "ADD-EMPLOYEE", user} as const)
export const removeEmploy = (id: number) => ({type: "REMOVE-EMPLOYEE", id} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', isFetching} as const)


export const fetchEmployeesTC = (): AppThunk => async dispatch => {
    try {
        dispatch(toggleIsFetching(true))
        const res = await api.getEmployees()
        dispatch(toggleIsFetching(false))
        if (res.status === 200) {
            dispatch(setEmployees(res.data.data))

        } else {
            console.log('ошибка получения данных от сервера')
        }
    } catch (error) {
        console.log('Error: ', {...error})
    }
}


type initialStateType = typeof initialState
export type ActionsType =
    | ReturnType<typeof setEmployees>
    | ReturnType<typeof addEmploy>
    | ReturnType<typeof removeEmploy>
    | ReturnType<typeof toggleIsFetching>
