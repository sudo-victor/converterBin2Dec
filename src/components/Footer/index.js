import React from "react";

import { Container } from "./styles";

export default function Footer() {
    return (
        <Container>
            <p>
                Developed by <strong> Victor de Souto</strong>
            </p>
            <ul>
                <li>
                    <a
                        href="https://github.com/sudo-victor"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        github
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/victor-souto-soares-4811b118a/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        linkedin
                    </a>
                </li>
            </ul>
        </Container>
    );
}
