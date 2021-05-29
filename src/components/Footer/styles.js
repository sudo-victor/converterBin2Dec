import styled from "styled-components";

export const Container = styled.footer`
    width: 100%;
    height: 70px;
    margin-top: auto;

    background: #073B3A;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    cursor: default;

    ul {
        margin: 25px 0;

        display: flex;
        flex-direction: column;
        font-size: 12px;

        li a {
            text-decoration: none;
        }
    }

    @media(max-width: 736px) {
        flex-direction: column;
    }
`;
