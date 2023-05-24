import React, { useEffect, useState } from 'react'
import Navbar from "./Navbar"
import Footer from "./Footer"
import { useParams } from 'react-router-dom'

const Productpage = () => {
    const { category, productid } = useParams();
    const [product, updateProduct] = useState({ sizes: [] });
    const [selectedSize, updateSelectedSize] = useState("");
    const fetchData = async () => {
        let url = `http://localhost:5000/fetch/product?id=${productid}`
        const response = await fetch(url, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        let parsedData = await response.json();
        let product = parsedData.fetchproduct
        // console.log(parsedData)
        if (parsedData.success) {
            // console.log(product)
            updateProduct(product)
            // updateAlertStatus(false)
        } else {
            // updateAlertStatus(true)
            updateProduct({ sizes: [] })
        }

    }

    useEffect(() => {
        fetchData();
    }, [])


    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <div className="row" >
                    <div className="offset-lg-1 col-md-3 me-3 " >
                        <img src={product.productImage} alt="" data-aos="fade-down" className='img-fluid' />
                    </div>
                    <div className="col-md-7 pt-2">
                        <h5 className="text-secondary" data-aos="fade-down-right">{product.category}</h5>
                        <h3 className="text-dark my-2" data-aos="fade-down-right">{product.productName}</h3>
                        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illo et praesentium aut quo eveniet atque excepturi ex vel placeat. Aut quaerat quibusdam, nulla eaque aperiam earum autem placeat optio aspernatur rerum eveniet reprehenderit, deserunt laboriosam quod culpa dolore illo voluptatibus modi nobis exercitationem. Quas saepe eligendi odit minus aliquam.</h6>
                        <h4 className="text-success my-4" data-aos="fade-down-right">{Math.round((product.price * product.discount) / 100)} Rs. <strike className='text-muted fs-5 '>{product.price}</strike></h4>
                        <div className="d-flex justify-content-start align-items-center">
                            <h5 className='me-md-3 me-1' data-aos="fade-down-right">Sizes : </h5>
                            {/* //<button className="px-3 btn btn-sm btn-outline-primary mx-2" data-aos="fade-down-left">{size}</button> */}
                            {product.sizes.map(size => {
                                return <div key={size}>

                                    <input type="radio" className="btn-check" id={size} name={category} key={size} onChange={(e) => { updateSelectedSize(e.target.id); }} defaultChecked />
                                    <label className="btn btn-outline-primary mx-2" data-aos="fade-down-left"  htmlFor={size}>{size}</label>

                                </div>
                            })}
                        </div>
                        <h5 className="text-secondary mt-3 mb-4" data-aos="fade-down-right">{product.stock} units left</h5>
                        <p className="text-danger">As This project is for learning purpose buy now and cart functionality is not available to save data resources.</p>
                        <div className="d-flex mb-5">
                            {product.stock == '0' ? <>
                                <button type="button" className="btn btn-secondary me-3 btn-lg" data-aos="fade-down-right" onClick={() => { document.getElementById("displayAlert").click() }}>Buy Now</button> <button className="btn btn-secondary btn-lg " data-aos="fade-down-right" onClick={() => { document.getElementById("displayAlert").click() }}>Add to Cart</button></>
                                : <><button className="btn btn-lg text-light me-3" style={{ backgroundColor: "#b411f5" }} data-aos="fade-down-right" >Buy Now</button>
                                    <button className="btn btn-lg text-light me-3" style={{ backgroundColor: "#b411f5" }} data-aos="fade-down-right" >Add to Cart</button></>}


                        </div>
                    </div>
                </div>
            </div >
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal" id="displayAlert">
                Display Alert
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Notification</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Sorry ,This product is unavailable.
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{ backgroundColor: "#b411f5" }}>Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Productpage
