import { createGlobalStyle } from "styled-components"
import reset from 'styled-reset';
import styled from "styled-components";

export const Title = styled.h1`
    margin-top: 20px;
    color: orange;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const lightTheme = {
    accent: "#0095f6",
    bgColor: "#FAFAFA",
    fontColor: "rgb(38, 38, 38)",
    borderColor: "rgb(219, 219, 219)",
};

export const darkTheme = {
    fontColor: "lightgray",
    bgColor: "#2c2c2c",
};

export const GlobalStyles = createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
    }
    input{
        all:unset;
    }
    body {
        background-color: #FAFAFA;
        font-size: 14px;
        font-family: 'Open Sans', sans-serif;
        color: rgb(38, 38, 38);
    }
    a {
        text-decoration: none;
        color: inherit;
    }
`;

export const SymbolicIcon = styled.div`
    margin: 0 auto;
    margin-top: 50px;
    width: 50%;
    height: 25vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledImg = styled.img`
    width: 100%;
    height: 100%;
`;