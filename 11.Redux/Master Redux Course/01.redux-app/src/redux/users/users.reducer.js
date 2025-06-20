export const usersReducer = (state = [], action) => {
    if (action.type === "ADD_USERS") {
        return [...state, ...action.payload]
        // return {...state,data: action.payload}
    }
    if (action.type === "CHANGE_USER") {
        const users = [...state]
        const desireUsers = users.filter(user => user.name !== action.payload.name)
        return [...desireUsers, { ...action.payload }]
    }
    return state
}