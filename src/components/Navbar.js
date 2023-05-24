import React, { useContext, useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import cartContext from '../context/cartcontext'
import { ActionCreator } from 'redux'
import { useDispatch, useSelector } from 'react-redux'
import { setLogin,setLogout } from '../redux/actions/login-actions'

const Navbar = () => {
    const loginStatus = useSelector(state => state.login  )
    const dispatch = useDispatch()// const parsedContext = useContext(cartContext);
    // const { loginStatus, updateLoginStatus } = parsedContext
    useEffect(()=>{
        if (sessionStorage.getItem('auth-token')) {
            dispatch(setLogin(sessionStorage.getItem('auth-token')))
        } 
    },[])
    const [isEmpty, updateEmptyStatus] = useState(true)
    const navigate = useNavigate()
    // console.log(noOfItems)
    console.log(loginStatus)
    return (
        <>
            <nav className="navbar navbar-dark navbar-expand-lg shadow-lg" style={{ backgroundColor: '#b411f5' }}>
                <div className="container-fluid">
                    <Link className="navbar-brand fs-4" to="/">FuncWear</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto fs-5">
                            <li className="nav-item mx-2">
                                <div className="dropdown mt-2">
                                    <a className="text-decoration-none text-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Products
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/T-shirt">T-shirts</Link></li>
                                        <li><Link className="dropdown-item" to="/Hoodie">Hoodies</Link></li>
                                        <li><Link className="dropdown-item" to="/Shirt">Shirts</Link></li>
                                        <li><Link className="dropdown-item" to="/Sweatshirt">Sweatshirts</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link active" to="/about">About</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <div className="dropdown mt-2">
                                    <Link className="text-decoration-none text-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
                                        My Account
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/tshirts">My Profile</Link></li>
                                        <li><Link className="dropdown-item" to="/hoodies">My Orders</Link></li>
                                        <li><Link className="dropdown-item" to="/shirts">My Cart</Link></li>
                                        <li><Link className="dropdown-item" to="/jeans">Customer Care</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item mx-2" style={{cursor: "pointer"}}>
                                { !loginStatus.isLogin ? <Link className="nav-link active" to="/login">Login</Link> : <>
                                <span className="nav-link active" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Logout
                                </span>

                                
                                <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="exampleModalLabel">Funcwear</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                Are You sure ? Or Do you want to stay logged in ?
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" id="modalCloseBtn">Close</button>
                                                <button type="button" className="btn btn-danger" onClick={() => { sessionStorage.removeItem('auth-token'); 
                                                dispatch(setLogout("")); navigate("/"); document.getElementById("modalCloseBtn").click() }}>Logout</button>
                                            </div>
                                        </div>
                                    </div>
                                </div> </> }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <button type="button" className="btn btn-primary ms-auto d-block me-2 mt-2 fs-5" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{ backgroundColor: '#b411f5' }}>
                <i className="bi bi-cart4 me-2"></i> Cart
            </button>


            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog  modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Cart Items</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {!loginStatus.isLogin ? <div> User not logged in </div> : <div> {isEmpty ? 'Cart is Empty' : 'Cart is not Empty'}</div>
                            }
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" style={{ backgroundColor: '#b411f5' }}>Understood</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
