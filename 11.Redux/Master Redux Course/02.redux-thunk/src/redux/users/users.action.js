export const getUsers = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: "FETCH_USER_PENDING"
            })
            const resp = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await resp.json();
            dispatch({
                type: "FETCH_USER_FULFILLED",
                payload: data,
            })

        } catch (error) {
            dispatch({
                type: "FETCH_USER_ERROR",
                error: error.message
            })
        }
    }
}