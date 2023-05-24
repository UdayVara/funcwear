import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="container-fluid py-5 text-light" style={{ backgroundColor: '#b411f5' }}>
                <div className="container">

                    <div className="row">
                        <div className="col-md-3 fs-3">Image Here</div>
                        <div className="col-md-6  mt-md-0 mt-4 ">
                            <div className="row">

                                <div className="col-6 fs-5">
                                    <h4 className='fs-3'>Products</h4>
                                    <ul style={{ listStylePosition: "inside", listStyleType: "none" }}>
                                        <li>Tshirt</li>
                                        <li>Shirt</li>
                                        <li>Jeans</li>
                                        <li>Cap</li>
                                    </ul>
                                </div>
                                <div className="col-6 fs-5"><h4 className='fs-3'>Services</h4>
                                    <ul style={{ listStylePosition: "inside", listStyleType: "none" }}>
                                        <li>Purchase</li>
                                        <li>Shipping</li>
                                        <li>create</li>
                                        <li>Easy return</li>
                                    </ul></div>

                            </div>
                        </div>
                        <div className="col-md-3">
                            <h3>Funcwear</h3>
                            <h6>Make or order your favorite products at one place.</h6>
                            <h6 className="mt-3">Contact us on</h6>
                            <div className="d-flex fs-5 justify-content-start" >
                                <i className="bi bi-envelope me-3"></i>
                                <i className="bi bi-facebook me-3"></i>
                                <i className="bi bi-whatsapp me-3"></i>
                                <i className="bi bi-instagram me-3"></i>
                                <i className="bi bi-linkedin"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
