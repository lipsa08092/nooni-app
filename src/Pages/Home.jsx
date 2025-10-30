

import React from 'react'
import Navbar from '../Layouts/Navbar'
import Footer from '../Layouts/Footer'
import HomeContainer from "../Components/HomeContainer"
import ShopContainer from '../Components/ShopContainer'
import BlogContainer from '../Components/BlogContainer'

function Home() {
    return (
        <div>
            <Navbar/>
            <HomeContainer />
            <ShopContainer  />
            <BlogContainer/>
            <Footer />  
        </div>
    )
}

export default Home;
