import React, { useState } from "react";

import {
    GlobalStyles,
    Container,
    Form,
    Label,
    SpanError,
    Input,
    Output,
    Button
} from "./styles";

function App() {
    const [messageError, setMessageError] = useState("");
    const [binaryInput, setBinaryInput] = useState("");
    const [decimalOutput, setDecimalOutput] = useState("");
    const [decimalInput, setDecimalInput] = useState("");
    const [binaryOutput, setBinaryOutput] = useState("");

    const binToDec = e => {
        e.preventDefault();
        if (binaryInput.match(/^[0-1]+$/g) === null) {
            setMessageError("Enter a binary number");
            return;
        }

        setMessageError("");

        const transformToString = binaryInput
            .split("")
            .map(Number)
            .reverse();

        const result = transformToString.reduce(
            (decimal, currentBinary, idx) =>
                decimal + currentBinary * Math.pow(2, idx)
        );

        setDecimalOutput(result);
    };

    const result = (decimal, binaryArray) => {
        var acumulator = decimal;

        for (var done = false; done !== true; done) {
            var bin = acumulator % 2;
            acumulator = Math.trunc(acumulator / 2);
            binaryArray.unshift(bin);

            if (acumulator === 0) done = true;
        }

        return Number(binaryArray.join(""));
    };

    const decToBin = e => {
        e.preventDefault();

        let binaryArray = [];

        const resultConvert = result(decimalInput, binaryArray);

        setBinaryOutput(resultConvert);
    };

    return (
        <>
            <GlobalStyles />
            <Container className="App">
                <h1>Bin2Dec</h1>
                <Form>
                    <SpanError>{messageError}</SpanError>
                    <Label>Decimal Input</Label>
                    <Input
                        type="text"
                        name=""
                        id=""
                        value={decimalInput}
                        onChange={e => setDecimalInput(e.target.value)}
                        placeholder="Type a number binary"
                    />
                    <Button onClick={decToBin}>to convert</Button>
                    <Label>Binary Output</Label>
                    <Output
                        type="text"
                        name=""
                        id=""
                        value={binaryOutput}
                        placeholder="Number Decimal"
                        disabled
                    />
                </Form>
            </Container>
        </>
    );
}

export default App;
