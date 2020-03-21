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

        color: #333;
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
    margin: 40px auto;
    padding: 5px 5px 30px 5px;

    background: #333;
    border-radius: 5px;
    box-shadow: 5px 5px 7px #333;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
        width: 95%;

        input,
        div {
            width: 90%;
        }

        div input {
            width: 100%;
        }
    }
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

export const BoxOutput = styled.div`
    width: 50%;
    padding: 0;
    position: relative;

    img {
        margin: 2px;

        position: absolute;
        top: 0;
        right: 0;
    }
`;

export const Output = styled(Input)`
    width: 100%;
    margin: 0;

    background: #fff;

    &:focus {
        width: 100%;
        height: 40px;
    }
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

    transition: all 300ms;

    &:active {
        background: #f9f9f9;
        color: tomato;
    }
`;

export const SpanCopied = styled.span`
    padding: 1px;
    padding-right: 2px;
    position: absolute;
    top: 0;
    left: 0;

    background: tomato;
    font-size: 10px;
    border-top-left-radius: 5px;
    border-bottom-right-radius: 5px;

    transition: all 300ms;
`;
