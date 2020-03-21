import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Container, Label, Button } from "./styles";

import SpanError from "../SpanError";
import Input from "../Input";
import BoxOutput from "../BoxOutput";

export default function Form() {
    const objData = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        const buttonCopy = document.getElementById("copy");
        const spanCopied = document.getElementById("copied");

        spanCopied.style.display = "none";

        buttonCopy.onclick = e => {
            document.getElementById("output").select();
            document.execCommand("copy");
            setTimeout(() => {
                spanCopied.style.display = "block";
            }, 100);
            setTimeout(() => {
                spanCopied.style.display = "none";
            }, 2000);
        };
    }, []);

    const binToDec = e => {
        e.preventDefault();
        if (objData.binaryInput.match(/^[0-1]+$/g) === null) {
            dispatch({ type: "ERROR", value: true });
            dispatch({ type: "UPDATE_BINARY", value: "" });
            return;
        }

        dispatch({ type: "ERROR", value: false });

        const transformToString = objData.binaryInput
            .split("")
            .map(Number)
            .reverse();

        const result = transformToString.reduce(
            (decimal, currentBinary, idx) =>
                decimal + currentBinary * Math.pow(2, idx)
        );

        dispatch({ type: "UPDATE_DECIMAL", value: result });
    };

    return (
        <Container>
            <SpanError />
            <Label>Binary Input</Label>
            <Input />
            <Button onClick={binToDec} id="buttonConv">
                convert
            </Button>
            <Label>Decimal Output</Label>
            <BoxOutput />
        </Container>
    );
}
