// import React from 'react'
// import { Link } from "react-router-dom";
// import Shop from "./Shop"   
// import Navbar from "./Layouts/Navbar"
// import Footer from "./Layouts/Footer"


// export default function Home() {
//     return (
//         <div>
//         <Navbar />
//         <div className='flex flex-col md:flex-row items-center justify-around min-h-screen p-6 space-y-8 '>
//             <div className="max-w-lg">
//                 <p className="text-red-500 font-semibold font-serif mb-8">SALE OF 25%</p>
//                 <h1 className="text-5xl font-semibold mb-8 font-serif">Chairs & Seating <br /><br />You'll Love</h1>
//                 <p className="mb-6 text-gray-700 text-lg">Designer chair styles for every space - Free Shipping</p>
//                 <Link to="/shop" className="underline mr-1 font-semibold text-black px-8 py-3 outline-none hover:text-gray-800 transition">SHOP NOW</Link>
//             </div>
//             <div className="w-[400px] gap-6">
//                 <div className="bg-white">
//                     <img src="https://static.vecteezy.com/system/resources/previews/021/356/184/original/black-chair-isolated-on-a-transparent-background-png.png" alt="Adirondack Chair" className="w-full h-48 object-cover rounded-t-lg"/>
//                 </div>
//             </div>
//         </div>
//         <Shop />
//         <Footer />
//         </div>
//     );
// }

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
