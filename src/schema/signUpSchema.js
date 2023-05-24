import * as yup from "yup"


const signUpSchema=yup.object({
    username:yup.string().min(6).required(),
    email:yup.string().email().required(),
    password:yup.string().min(8).required(),
    cpass:yup.string().required().oneOf([yup.ref("password"),null],"Passwords should match")})

export default signUpSchema