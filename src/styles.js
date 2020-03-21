import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *, html, body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: 'Noto Sans', sans-serif;
        color: #f9f9f9;
    }
`;

export const Container = styled.div`
    padding: 20px;
    height: 100vh;

    background: #f9f9f9;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Form = styled.form`
    width: 50%;
    margin: 20px auto;
    padding: 5px 5px 30px 5px;

    background: #333;
    border-radius: 5px;
    box-shadow: 5px 5px 7px #333;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const SpanError = styled.span`
    margin: 5px;
    padding: 2px;

    color: tomato;
    font-size: 13px;
`;

export const Label = styled.label`
    margin: 5px;

    font-weight: 700;
`;

export const Input = styled.input`
    width: 50%;
    height: 40px;
    margin: 5px;
    padding: 20px;
    text-align: center;

    border: none;
    border-radius: 5px;
    box-shadow: 2px 2px 5px #222;
    color: #333;

    transition: ease-in-out 500ms;

    &:focus {
        width: 51%;
        height: 50px;
    }
`;

export const Output = styled(Input)`
    background: #fff;
`;

export const Button = styled.button`
    width: 200px;
    height: 50px;
    margin: 15px;

    border: none;
    border-radius: 50px;
    color: #f5f5f5;
    background: tomato;
    font-weight: 700;

    transition: all 800ms;

    &:hover {
        background: #f9f9f9;
        color: tomato;
    }
`;
