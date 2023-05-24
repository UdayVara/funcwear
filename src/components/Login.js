import React, { useState , useContext } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import loginSchema from "../schema/loginSchema"
import Alert from './Alert';
import cartContext from '../context/cartcontext'
import { useDispatch } from 'react-redux';
import { setLogin } from '../redux/actions/login-actions';
const Login = () => {
    const navigate = useNavigate()
    // const {updateLoginStatus}= useContext(cartContext)
    const dispatch = useDispatch()
    const [alertStatus, updateAlertStatus] = useState({ color: "", visibility: false, message: "" })
    const sendLoginDataToServer = async (values) => {
        const response = await fetch("http://localhost:5000/auth/login", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({ password: values.password, email: values.email }), // body data type must match "Content-Type" header
        });
        let result = await response.json(); // parses JSON response into native JavaScript objects
        console.log(result);
        if (result.success) {
            updateAlertStatus({ visibility: true, message: "Logged in Successfully , You will be redirected Shortly", theme: "success" })
            sessionStorage.setItem('auth-token', result.authtoken)
            dispatch(setLogin(result.authtoken))
            setTimeout(() => { navigate("/") }, 1200)
        } else {
            console.log(result)
            updateAlertStatus({ visibility: true, message: `Error :- ${result.message}`, theme: "danger" })
        }
    }
    let initVal = { email: "", password: "" }
    const { errors, handleSubmit, handleChange, touched } = useFormik({
        initialValues: initVal,
        validationSchema: loginSchema,
        onSubmit: (values) => {
            sendLoginDataToServer(values)
        }
    })
    return (
        <>
            <Navbar />
            <div className="container mx-auto d-flex justify-content-center align-items-center mb-5 pb-3 flex-column" style={{ maxWidth: "450px" }}>
                <h3 className="text-center fw-bold fs-1 my-2 mb-4" style={{ color: '#b411f5' }}>Login</h3>
                {alertStatus.visibility && <Alert message={alertStatus.message} theme={alertStatus.theme} />}

                <TextField className='w-100 my-3 mx-2' id="outlined-basic" label="Email" variant="outlined" color='secondary' name='email' onChange={handleChange} error={errors.email && touched.email} helperText={errors.email && touched.email ? errors.email : ""} />
                <TextField className='w-100 my-3 mx-2' id="outlined-basic" label="Password" variant="outlined" color='secondary' name='password' onChange={handleChange} error={errors.password && touched.password} helperText={errors.password && touched.password ? errors.password : ""} />


                <div className="container-fluid mb-2">

                    <div className="row" style={{ color: '#b411f5', fontWeight: 'bold' }}>
                        <div className="col-md-6">
                            Forgot Password?
                        </div>
                        <div className="col-md-6 text-end">
                            <Link to="/signup" className='text-decoration-none' style={{ color: '#b411f5' }}>Don't have a account ? create one</Link>
                        </div>
                    </div>
                </div>


                <Button color="secondary" variant='contained' className="w-100 rounded-pill my-2 fs-5" onClick={handleSubmit}>Login</Button>
            </div>
            <Footer />
        </>
    )
}

export default Login
