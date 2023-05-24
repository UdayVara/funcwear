import React, { useState } from 'react'
import { TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
const Admin = () => {
    document.title = "Admin - Login"
    const navigate = useNavigate()
    const [adminData,updateAdminData] = useState({userId:"",password:""})
    const handleAdminLoginChange = (e) => {
        updateAdminData({...adminData,[e.target.name]:e.target.value})
    }
    const handleLogin = () =>{
        if (adminData.userId == 'uday3114' && adminData.password == 'uday@4268') {
            navigate("/admin-home")
        } else {
            alert("Invalid Credentials , You are not Admin.")
        }
    }
    return (
        <>
            <div className="container mx-auto mt-5 d-flex justify-content-center flex-column align-items-center" style={{maxWidth:"450px"}}>
                <h1 className="text-center mt-5" style={{color:'#b411f5'}}>Login</h1>
                    <TextField id="outlined-basic" label="User ID" variant="outlined" className='w-100 mt-5' color='secondary' name='userId' onChange={handleAdminLoginChange}/>
                    <TextField id="outlined-basic" label="Password" type="password" variant="outlined" className='w-100 mt-4' color='secondary' name='password' onChange={handleAdminLoginChange}/>
                    <button className="btn align-self-end fs-4 me-2 text-light mt-3 px-4" style={{backgroundColor:'#b411f5'}} onClick={handleLogin}>Login</button>

            </div>
        </>
    )
}

export default Admin
