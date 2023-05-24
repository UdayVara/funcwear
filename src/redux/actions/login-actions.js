export const setLogin = (authToken) =>{
    return (dispatch) =>(
        dispatch({
            type:"Login",
            payload: authToken
        })
    )
}

export const setLogout = () =>{
    return (dispatch) =>(
        dispatch({
            type:"Logout",
            payload: ""
        })
    )
}