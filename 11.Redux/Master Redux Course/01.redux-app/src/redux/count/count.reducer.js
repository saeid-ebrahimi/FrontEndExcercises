export const countReducer = (state = 0, action) => {
    if (action.type === "INCREASE_COUNT_BY_ONE") {
        return state + 1
    }
    return state
}