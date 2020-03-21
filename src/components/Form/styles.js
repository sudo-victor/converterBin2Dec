import styled from "styled-components";

export const Container = styled.div`
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

export const Label = styled.label`
    margin: 5px;

    font-weight: 700;
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
