import detskiyMir from "./../../data/detskiy-mir";
import transport from "./../../data/transport";

const initialState = {
    data: {
        "detskiy-mir": detskiyMir,
        transport: transport
    },
    theme: "dark"
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "TOGGLE_THEME":
            return {
                ...state,
                theme: state.theme === "dark" ? "light" : "dark",
            };

        case "TOGGLE_LIKE":
            return {
                ...state,
                data: {
                    ...state.data,
                    ...action.payload
                }
            };

        default: return state;
    }
}


export default reducer;