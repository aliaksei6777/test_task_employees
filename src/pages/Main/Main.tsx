import React from "react";
import styled from "styled-components"

const MainContainer = styled.div`
      display: flex;
      justify-content: center;
    `

export const Main = () => {
    return (
        <MainContainer>
            <h3>main page</h3>
        </MainContainer>
    )
}