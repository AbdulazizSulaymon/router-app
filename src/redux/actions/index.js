const toggleTheme = () => {
    return {
        type: "TOGGLE_THEME"
    }
}

const toggleLike = (obj) => {
    return {
        type: "TOGGLE_LIKE",
        payload: obj
    }
}

export { toggleTheme, toggleLike };