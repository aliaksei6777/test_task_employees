import React from "react"
import {NavLink} from "react-router-dom"
import styled from "styled-components";

export const Header = () => {

    return (
        <HeaderContainer>
            <Nav>
                <StyledLink to={'/main'}>Main</StyledLink>
                <StyledLink to={'/employees'}>Employees</StyledLink>
            </Nav>
        </HeaderContainer>
    )
}


const HeaderContainer = styled.div`
  height: 80px;
  background-color: #9ac4ce;
  display: flex;
  align-items: center;
`
const Nav = styled.div`
  margin-left: 20px;
  width: 150px;
  display: flex;
  justify-content: space-between;
`
const StyledLink = styled(NavLink)`
  color: black;
  &.active {color: indianred;}
  &:hover {color: white};
`