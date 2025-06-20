export const unboxGiftReducer = (state = "", action) => {
    if (action.type === "UNBOX_GIFT") {
        return action.payload
    }
    return state
}