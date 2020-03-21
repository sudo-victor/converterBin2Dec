import { createStore } from "redux";

const INITIAL_STATE = {
    binaryInput: "",
    decimalOutput: "",
    messageError: "Enter either 1 or 0",
    error: false
};

function app(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "UPDATE_BINARY":
            state.binaryInput = action.value;
            return { ...state };
        case "UPDATE_DECIMAL":
            state.decimalOutput = action.value;
            return { ...state };
        case "ERROR":
            state.error = action.value;
            return { ...state };
        default:
            return state;
    }
}

const store = createStore(app);

export default store;
