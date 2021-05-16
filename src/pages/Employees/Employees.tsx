import React, {useEffect} from 'react'
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {UserType} from "../../api/api";
import {RootStateType} from "../../app/store";
import {addEmployee, fetchEmployeesTC, removeEmployee} from "../../app/reducer";
import {AddItemForm} from "../../components/AddItemForm/AddItemForm";
import {Preloader} from "../../components/Preloader/Preloader";

export const Employees = () => {

    useEffect(() => {
        dispatch(fetchEmployeesTC());
    }, []);

    const employees = useSelector<RootStateType, UserType[]>((state) => state.employees.users);
    const isFetching = useSelector<RootStateType, boolean>(state => state.employees.isFetching)
    const dispatch = useDispatch();

    const clickHandler = (id: number) => {
        dispatch(removeEmployee(id));
    };

    const addEmployeeHandler = (name: string) => {
        const newUser = {
            id: Math.floor(Math.random() * 1e7),
            first_name: name
        }
        dispatch(addEmployee(newUser))
    }


    return (
        <EmployeesContainer>
            <AddItemForm addUser={addEmployeeHandler}/>
            <div>
                {isFetching ? <Preloader/> : <h2>Employees</h2>}
            </div>
            <StyledUl>
                {employees.map(e => (
                    <StyledLi key={e.id}>
                        <span>{e.first_name}</span>
                        <button onClick={() => clickHandler(e.id)}>delete</button>
                    </StyledLi>
                ))}
            </StyledUl>
        </EmployeesContainer>
    )
}

const EmployeesContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`
const StyledUl = styled.ul`
  min-width: 200px;
  padding-left: 0;
  list-style-type: none;
  -moz-box-shadow:    3px 3px 5px 6px #ccc;
  -webkit-box-shadow: 3px 3px 5px 6px #ccc;
  box-shadow:         3px 3px 5px 6px #ccc;
`
const StyledLi = styled.li`
  display: flex;
  align-items: center;
  padding: 5px 10px 5px 10px;
  transition: background-color 100ms;
  &:hover {background-color: #9ac4ce};
  button {
    margin-left: auto;
    padding: 2px;
    color: indianred;
    cursor: pointer;
    transition: all 1000ms cubic-bezier(0.19, 1, 0.22, 1);
    outline: 1px solid;
    outline-offset: 0px;
    text-shadow: none;
    border: 0 solid;
  }
  button:hover {
    box-shadow: inset 0 0 20px rgba(255, 255, 255, .5), 0 0 20px rgba(255, 255, 255, .2);
    outline-color: rgba(255, 255, 255, 0);
    outline-offset: 7px;
  }
`
