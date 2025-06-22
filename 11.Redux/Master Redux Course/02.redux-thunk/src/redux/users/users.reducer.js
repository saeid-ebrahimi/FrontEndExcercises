const INITIAL_STATE = {
    data: [],
    isLoading: false,
    error: null,
}
export const usersReducer = (state = INITIAL_STATE, action) => {
    if (action.type === "ADD_USERS") {
        return [...state, ...action.payload]
        // return {...state,data: action.payload}
    }
    if (action.type === "CHANGE_USER") {
        const users = [...state]
        const desireUsers = users.filter(user => user.name !== action.payload.name)
        return [...desireUsers, { ...action.payload }]
    }
    if (action.type === "FETCH_USER_PENDING") {
        return {
            ...state,
            data: [],
            isLoading: true,
            error: null,
        }
    }
    if (action.type === "FETCH_USER_FULFILLED") {
        return {
            ...state,
            data: action.payload,
            isLoading: false,
            error: null
        }
    }
    if (action.type === "FETCH_USER_ERROR") {
        return {
            ...state,
            data: [],
            isLoading: false,
            error: action.error
        }
    }
    return state
}