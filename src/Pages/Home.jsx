

import React from 'react'
import Navbar from '../Layouts/Navbar'
import Footer from '../Layouts/Footer'
import HomeContainer from "../Components/HomeContainer"
import ShopContainer from '../Components/ShopContainer'

function Home() {
    return (
        <div>
            <Navbar/>
            <HomeContainer />
            <ShopContainer  />
            <Footer />  
        </div>
    )
}

export default Home;
