import React from "react";
import { useSelector } from "react-redux";

import { Container, Output } from "./styles";

import SpanCopied from "../SpanCopied";

export default function BoxOutput() {
    const decimalOutput = useSelector(state => state.decimalOutput);

    return (
        <Container>
            <Output
                type="text"
                id="output"
                value={decimalOutput}
                disable
                readOnly
                placeholder="decimal output"
            />
            <SpanCopied />
            <img
                src="https://image.flaticon.com/icons/svg/178/178921.svg"
                alt="copy"
                width="20"
                id="copy"
            />
        </Container>
    );
}
