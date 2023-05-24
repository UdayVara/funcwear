import { useState } from "react";
import CartContext from "./cartcontext"


const CartState = (props) => {

    const [loginStatus,updateLoginStatus] = useState({
        isLogin:false,
        loginToken:""
    });
    

    return(
        <CartContext.Provider value={{loginStatus,updateLoginStatus}}>
                {props.children}
        </CartContext.Provider>
    )
}

export default CartState;