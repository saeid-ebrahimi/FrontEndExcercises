const initialState = {
    fName: "John",
    lName: "Wick",
    age: 40,
}
export const userReducer = (state = initialState, action) => {
    if (action.type === "CHANGE_USER") {
        return { ...action.payload }
    }
    if (action.type === "CHANGE_USERNAME") {
        return { ...state, fName: action.payload.fName, lName: action.payload.lName }
    }
    return state
}