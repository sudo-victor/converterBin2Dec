import React from "react";
import { useSelector } from "react-redux";
import { FiCopy } from "react-icons/fi"

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
            <div id="copy">
                <FiCopy color="#073B3A" />
            </div>
        </Container>
    );
}
