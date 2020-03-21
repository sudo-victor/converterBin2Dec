import styled from "styled-components";

export const Container = styled.div`
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
