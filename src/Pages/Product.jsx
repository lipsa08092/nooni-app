import React from 'react'
import Navbar from '../Layouts/Navbar'
import Footer from '../Layouts/Footer'
import ProductContainer from '../Components/ProductsContainer'


function Product() {
    return (
        <div>
            {/* <CartProvider> */}
            <Navbar />
            <ProductContainer />
            {/* </CartProvider> */}
            <Footer/>
        </div>
    )
}

export default Product
