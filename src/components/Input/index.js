import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Container } from "./styles";

export default function Input() {
    const objData = useSelector(state => state);
    const dispatch = useDispatch();
    //const [binaryInput, setBinaryInput] = useState();

    return (
        <Container
            type="text"
            id="inputBin"
            value={objData.binaryInput}
            onChange={e =>
                dispatch({ type: "UPDATE_BINARY", value: e.target.value })
            }
            placeholder="Type a number binary"
        />
    );
}
