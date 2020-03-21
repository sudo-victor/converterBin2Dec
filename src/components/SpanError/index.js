import React from "react";
import { useSelector } from "react-redux";

import { Container } from "./styles";

export default function SpanError() {
    const objData = useSelector(state => state);

    return <Container>{objData.error ? objData.messageError : ""}</Container>;
}
