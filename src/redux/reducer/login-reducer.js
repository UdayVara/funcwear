const initialState = {isLogin: false,loginToken:""};

export const loginReducer = (state=initialState,action) => {
    switch (action.type) {
        case 'Login':
            return {...state,isLogin:true,loginToken:action.payload};
            break;
        case 'Logout':
            return {...state,isLogin:false,loginToken:action.payload};
            break;
        default:
            return state
            break;
    }
}