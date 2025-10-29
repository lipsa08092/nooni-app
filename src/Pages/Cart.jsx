import React from 'react'
import CartContainer from '../Components/CartContainer'
import Navbar from "../Layouts/Navbar";
import Footer from '../Layouts/Footer';
function Cart() {
    return (
        <div>
            <Navbar/>
            <CartContainer/>
            <Footer/>
        </div>
    )
}

export default Cart
