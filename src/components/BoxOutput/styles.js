import styled from "styled-components";

export const Container = styled.div`
    width: 90%;
    padding: 0;
    position: relative;

    div {
        margin: 2px;
        width: 20px;
        height: 20px;

        background-color: #333;
        border-radius: 2px;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        top: 0;
        right: 0;
    }
`;

export const Output = styled.input`
    width: 100%;
    height: 40px;
    padding: 20px;
    text-align: center;

    border: none;
    border-radius: 5px;
    box-shadow: 2px 2px 5px #222;
    color: #333;
    background: #f5f5f5;

    &:focus {
        width: 100%;
        height: 40px;
    }
`;
