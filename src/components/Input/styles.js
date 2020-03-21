import styled from "styled-components";

export const Container = styled.input`
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
