import React,{useContext, useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik'
import signUpSchema from '../schema/signUpSchema';
import Alert from './Alert';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLogin } from '../redux/actions/login-actions';

const Signup = () => {
    const [alertStatus,updateAlertStatus] = useState({color:"",visibility:false,message:""})
    // const {updateLoginStatus}= useContext(cartContext)
    
    const dispatch = useDispatch()


    const navigate = useNavigate();
    const sendDataToServer = async (values) => {
        // Default options are marked with *
        const response = await fetch("http://localhost:5000/auth/signup", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({username:values.username, password:values.password, email:values.email}), // body data type must match "Content-Type" header
        });
        let result = await response.json(); // parses JSON response into native JavaScript objects

        if (result.success) {
            updateAlertStatus({visibility:true, message:"Signed Up Successfully , You will be redirected Shortly",theme:"success"})
            sessionStorage.setItem("auth-token",result.authtoken)
            dispatch(setLogin(result.authtoken))
            setTimeout(() =>{navigate("/")},1200)
        } else {
            updateAlertStatus({visibility:true, message:`Error :- ${result.message}`,theme:"danger"})
        }
    }
    let initVal = { username: "", email: "", password: "", cpass: "" }
    const { handleChange, handleSubmit, errors, touched } = useFormik({
        initialValues: initVal,
        validationSchema: signUpSchema,
        onSubmit: (values) => {
            sendDataToServer(values);

        }
    })
    return (
        <>
            <Navbar />
            <div className="container mx-auto d-flex justify-content-center align-items-center mb-5 pb-3 flex-column" style={{ maxWidth: "450px" }}>
                <h3 className="text-center fw-bold fs-1 my-2 mb-4" style={{ color: '#b411f5' }}>Sign up</h3>

                {alertStatus.visibility && <Alert message={alertStatus.message} theme={alertStatus.theme} />}

                <TextField className='w-100 mt-3 mx-2' id="outlined-basic" label="Username" variant="outlined" color='secondary' name='username' onChange={handleChange} error={errors.username && touched.username} helperText={errors.username && touched.username ? errors.username : ""} />
                <TextField className='w-100 mt-3 mx-2' id="outlined-basic" label="Email" variant="outlined" color='secondary' name='email' onChange={handleChange} error={errors.email && touched.email} helperText={errors.email && touched.email ? errors.email : ""} />

                <TextField className='w-100 mt-3 mx-2' id="outlined-basic" label="Password" variant="outlined" color='secondary' name='password' onChange={handleChange} error={errors.password && touched.password} helperText={errors.password && touched.password ? errors.password : ""} />
                <TextField className='w-100 mt-3 mx-2' id="outlined-basic" label="Confirm Password" variant="outlined" color='secondary' name='cpass' onChange={handleChange} error={errors.cpass && touched.cpass} helperText={errors.cpass && touched.cpass ? errors.cpass.replace("cpass", "Confirm password") : ""} />

                <h6 className="mt-3 text-end align-self-end">
                    <Link to="/login" className='text-decoration-none' style={{ color: '#b411f5' }}> Already hava an account ? Login now</Link>
                </h6>


                <Button color="secondary" variant='contained' className="w-100 rounded-pill my-2 fs-5" onClick={handleSubmit}>Sign up</Button>
            </div>
            <Footer />
        </>
    )
}

export default Signup
