import styled from "styled-components";

export const Container = styled.div`
    width: 30%;
    margin: 80px auto;
    padding: 5px 5px 30px 5px;

    background: #0B6E4F;
    border-radius: 5px;
    box-shadow: 0px 0px  5px #333;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    #copy {
        background: #0B6E4F;
        cursor: pointer;
    }

    @media (max-width: 768px) {
        width: 95%;

        input,
        div {
            width: 100%;
        }

        div input {
            width: 100%;
        }

        #inputBin:focus {
            width: 91%;
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
    background: #073B3A;
    font-weight: 700;
    cursor: pointer;

    transition: all 300ms;

    &:active {
        background: #f9f9f9;
        color: tomato;
    }
`;
