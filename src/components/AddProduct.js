import React from 'react'
import { TextField, Checkbox } from '@mui/material'
import { useFormik } from 'formik'
const AddProduct = () => {
    let initVal = {
        productname: "",
        mrp: "",
        discount: "",
        category: "T-shirt",
        description: "",
        S: [],
        M: [],
        L: [],
        XL: [],
        XXL: [],
        imagelink:""
    };
    let sizeArray = [1]
    const sendDataToAPI = async(values) => {
        sizeArray = []
        if (values.S.length !== 0) {
            sizeArray.push("S")
        }
        if (values.M.length !== 0) {
            sizeArray.push("M")
        }
        if (values.L.length !== 0) {
            sizeArray.push("L")
        }
        if (values.XL.length !== 0) {
            sizeArray.push("XL")
        }
        if (values.XXL.length !== 0) {
            sizeArray.push("XXL")
        }
        // console.log(values.S.length)
        console.log(sizeArray)
        // Example POST method implementation:
        // Default options are marked with *
        const response = await fetch("http://localhost:5000/addproduct", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                productname:values.productname,
                imagelink:values.imagelink,
                category:values.category,
                mrp:values.mrp,
                discount:values.discount,
                description:values.description,
                sizes:sizeArray
            }), // body data type must match "Content-Type" header
        });
        const result = await response.json(); // parses JSON response into native JavaScript objects
    
}
    const { handleChange, handleSubmit } = useFormik({
        initialValues: initVal,
        onSubmit: (values) => {
            // console.log(values)
            sendDataToAPI(values)
        }
    })

return (
    <div className="container border border-2 shadow-lg pb-2 mt-1 mx-auto d-flex justify-content-center flex-column align-items-center rounded " style={{ maxWidth: "450px" }}>
        <h1 className="text-center" style={{ color: '#b411f5' }}>Add Product</h1>
        <TextField id="outlined-basic" label="Product Name" variant="outlined" className='w-100 mt-3' color='secondary' name="productname" onChange={handleChange} />
        <TextField id="outlined-basic" type="number" label="MRP" variant="outlined" className='w-100 mt-4' color='secondary' name='mrp' onChange={handleChange} />
        <TextField id="outlined-basic" label="Discount" type="number" variant="outlined" className='w-100 mt-4' color='secondary' name='discount' onChange={handleChange} />
        <div className="form-group mt-3 w-100">

            <label htmlFor="" className="form-label">Category : </label>
            <select className="form-select" name='category' onChange={handleChange}>
                <option value="T-shirt" >T-shirt</option>
                <option value="Shirt">Shirt</option>
                <option value="Hoodie">Hoodie</option>
                <option value="Hoodie">Sweatshirt</option>

            </select>
            <div className="form-group mt-3">
                <div className="form-label">Description : </div>
                <textarea className='form-control' id="" cols="30" rows="4" name="description" onChange={handleChange} ></textarea>
            </div>
            <div className="form-group mt-3">
                <div className="form-label">Image : </div>
                <input type="text" name="imagelink" id="file" onChange={handleChange} className="form-control" />
            </div>
            <h4 className='mt-2 mb-3'>Sizes : </h4>
            <div className=" px-1 wrapper-sizes d-flex flex-row justify-content-between">

                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="S" id="flexCheckDefault" name='S' onChange={handleChange} />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        S
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="M" name="M" id="flexCheckDefault" onChange={handleChange} />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        M
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="L" name="L" id="flexCheckDefault" onChange={handleChange} />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        L
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="XL" name="XL" id="flexCheckDefault" onChange={handleChange} />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        XL
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="XXL" id="flexCheckDefault" onChange={handleChange} name="XXL"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        XXl
                    </label>
                </div>
            </div>
            <button className="btn fs-5 float-end mt-4 d-block me-2 text-light" style={{ backgroundColor: '#b411f5' }} type="submit" onClick={handleSubmit}>Add Product </button>

        </div>
    </div>
)
}

export default AddProduct
