import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
import Alert from './Alert'
const Catalog = () => {
    const { category } = useParams()
    const [products, setProducts] = useState([])
    const [alert, updateAlertStatus] = useState(false)
    // Example POST method implementation:

    // Default options are marked with *
    const fetchData = async () => {
        let url = `http://localhost:5000/fetch?category=${category}`
        const response = await fetch(url, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        let parsedData = await response.json();

        if (parsedData.success) {
            let products = parsedData.products
            console.log(products)
            setProducts(products)
            updateAlertStatus(false)
        } else {
            updateAlertStatus(true)
            setProducts([])
        }

    }

    useEffect(() => {
        fetchData();
    }, [category])
    return (
        <>
            <Navbar />
            {alert && <div className="mt-5 container" style={{ height: "60vh" }}> <h4 className=' fs-1 text-center mt-3'>Product  {category} is unavailable</h4></div>}
            <div className="container my-3">
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 mb-5">
                    {products.map(product => {
                        return <div className="col" key={product._id}>
                            <div className="card" data-aos="fade-down">
                                <img src={product.productImage} className="card-img-top " alt="..." style={{ minHeight: "22rem", maxHeight: "22rem" }} />
                                <div className="card-body">
                                    <p className="card-text fs-4">{product.productName}</p>
                                    <p className="card-text fs-5">Price : <span className="text-success fw-bold fs-4">{Math.round((product.price * product.discount) / 100)} <strike className="text-muted fs-5 fw-normal">{product.price}</strike></span></p>
                                    <Link className="btn text-light" style={{ backgroundColor: '#b411f5' }} to={`/${category}/${product._id}`} >View Product</Link>
                                </div>
                            </div>
                        </div>
                    })}


                </div>
            </div>
            <Footer />
        </>
    )
}

export default Catalog
