import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *, html, body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: 'Noto Sans', sans-serif;
        color: #f9f9f9;
    }

    h1 {
        margin: 15px;

        color: #f9f9f9;
    }
`;

export const Container = styled.div`
    height: 100vh;

    background: #073B3A;

    display: flex;
    flex-direction: column;
    align-items: center;
`;
