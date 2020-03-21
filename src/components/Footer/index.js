import React from "react";

import { Container } from "./styles";

export default function Footer() {
    return (
        <Container>
            <p>
                feito por <strong> Victor de Souto</strong>
            </p>
            <ul>
                <li>
                    <a
                        href="https://github.com/VictorSouto-ux"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        github
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.instagram.com/viktor_souto/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        instagram
                    </a>
                </li>
            </ul>
        </Container>
    );
}
