import React from "react";
import { Provider } from "react-redux";

import { GlobalStyles, Container } from "./styles";

import Form from "./components/Form";
import Footer from "./components/Footer";
import store from "./store";

function App() {
    return (
        <>
            <GlobalStyles />
            <Provider store={store}>
                <Container className="App">
                    <h1>Bin2Dec</h1>
                    <Form />
                    <Footer />
                </Container>
            </Provider>
        </>
    );
}

export default App;
