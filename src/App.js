import Home from './components/Home.js'
import About from './components/About.js'
import Catalog from './components/Catalog.js'
import Checkout from './components/Checkout.js'
import Order from './components/Order.js'
import Productpage from './components/Productpage.js'
import Contact from './components/Contact.js'
import Cartstate from './context/cartstate'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Myaccount from './components/Myaccount.js'
import Signup from './components/Signup.js'
import Login from './components/Login.js'
import Admin from './components/Admin.js'
import AddProduct from './components/AddProduct.js'

function App() {
  return (
    <>
      {/* <Cartstate> */}

        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin-home" element={<AddProduct />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/:category" element={<Catalog />} />
            <Route path="/:category/:productid" element={<Productpage />} />
            <Route path="/order" element={<Order />} />
            <Route path="/myaccount" element={<Myaccount />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      {/* </Cartstate>  */}
     

    </>
  );
}

export default App;
