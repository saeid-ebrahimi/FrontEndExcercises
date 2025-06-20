export const getUsers = () => {
    return async (dispatch) => {
        try {
            const resp = await fetch("https://jsonplaceholder.typicode.com/users")
            const status = await resp.status()
            const data = await resp.json();
            dispatch({
                type: "ADD_USERS",
                payload: data
            })
        } catch (error) {
            console.error(error);
        }
    }
}