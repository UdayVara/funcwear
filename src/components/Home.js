import React, { useContext } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Home = () => {
  
  return (
    <>
      <Navbar />
      <div className="container-fluid bg-light d-flex flex-column justify-content-center align-items-center" style={{ height: "84vh", color: '#b411f5' }}>
        <h1>Welcome to FuncWear</h1>
        <h4 className='pb-5 mb-5'>Create Your customized Outfit now</h4>
      </div>
      <div className="container my-5">
        <div className="row row-cols-2 row-cols-md-4">
          <div className="col">
            <div className="card">
              <h2 className="ms-3 mt-2 mb-0" style={{ color: '#b411f5' }}>T-Shirts</h2>
              <div className="card-body">

                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <h2 className="ms-3 mt-2 mb-0" style={{ color: '#b411f5' }}>Hoodies</h2>
              <div className="card-body">

                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <h2 className="ms-3 mt-2 mb-0" style={{ color: '#b411f5' }}>Shirts</h2>
              <div className="card-body">

                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. Lorem, ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <h2 className="ms-3 mt-2 mb-0" style={{ color: '#b411f5' }}>Trackpants</h2>
              <div className="card-body">

                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
