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

    const binToDec = e => {
        e.preventDefault();
        if (binaryInput.match(/^[0-1]+$/g) === null) {
            setMessageError("Enter either 0 or 1");
            return;
        }

        setMessageError("");

        const transformString = binaryInput
            .split("")
            .map(Number)
            .reverse();

        setDecimalOutput(transformString);
    };

    return (
        <>
            <GlobalStyles />
            <Container className="App">
                <h1>Bin2Dec</h1>
                <Form>
                    <SpanError>{messageError}</SpanError>
                    <Label>Binary Input</Label>
                    <Input
                        type="text"
                        name=""
                        id=""
                        value={binaryInput}
                        onChange={e => setBinaryInput(e.target.value)}
                        placeholder="Type a number binary"
                    />
                    <Button onClick={binToDec}>to convert</Button>
                    <Label>Decimal Output</Label>
                    <Output
                        type="text"
                        name=""
                        id=""
                        value={decimalOutput}
                        placeholder="Number Decimal"
                        disabled
                    />
                </Form>
            </Container>
        </>
    );
}

export default App;
