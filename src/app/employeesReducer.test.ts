import {
    addEmployee,
    employeesReducer,
    InitialStateType,
    removeEmployee,
    setEmployees,
    toggleIsFetching
} from "./employeesReducer";

let startState: InitialStateType

beforeEach(() => {
    startState = {
        users: [{id: 1, email: "", first_name: "Alex", last_name: "Ivanov", avatar: ""},
            {id: 2, email: "", first_name: "Valera", last_name: "Ivanov2", avatar: ""},
            {id: 3, email: "", first_name: "Oleg", last_name: "Ivanov3", avatar: ""}
        ],
        isFetching: false
    }
});

test('users should be set', () => {

    const endState = employeesReducer({users: [],isFetching: false}, setEmployees(startState.users))
    expect(endState.users.length).toBe(3);
});

test('correct user should be added', () => {
    const newUser = {id: 4, email: "", first_name: "Nikita", last_name: "Ivanov4", avatar: ""}

    const endState = employeesReducer(startState, addEmployee(newUser))

    expect(endState.users.length).toBe(4);
    expect(endState.users[3].first_name).toBe("Nikita");
});

test('correct user should be deleted', () => {
    const userId = 4
    const endState = employeesReducer(startState, removeEmployee(userId))

    expect(endState.users.length).toBe(3);
    expect(endState.users[0].id).toBe(1);
});

test('fetching status should be changed', () => {

    const endState = employeesReducer(startState, toggleIsFetching(true))

    expect(endState.isFetching).toBe(true);

});
