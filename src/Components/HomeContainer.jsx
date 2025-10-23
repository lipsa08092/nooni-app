import React from 'react'
import { Link } from "react-router-dom";
import {motion} from "framer-motion";




export default function HomeContainer() {
    return (
        <motion.div className='ml-20 flex flex-col md:flex-row items-center justify-around min-h-screen p-10 space-y-5 '
                initial={{ x: 200, opacity: 0 }}   
                animate={{ x: 0, opacity: 1 }}    
                transition={{ duration: 4, ease: "easeOut", repeat:Infinity  }} >
            <div className="max-w-lg">
                <p className="text-red-500 font-semibold font-serif mb-8">SALE OF 25%</p>
                <h1 className="text-5xl font-semibold mb-8 font-serif max-sm:text-3xl">Chairs & Seating <br />You'll Love</h1>
                <p className="mb-6 text-gray-700 text-lg">Designer chair styles for every space - Free Shipping</p>
                <Link to="/shop" className="underline font-semibold text-black py-3 outline-none hover:text-blue-600 transition">SHOP NOW</Link>
            </div>
            <div className="mt-10 md:mt-0">
                <img src="https://static.vecteezy.com/system/resources/previews/021/356/184/original/black-chair-isolated-on-a-transparent-background-png.png" alt="Adirondack Chair" className="w-[700px] h-[500px] object-contain drop-shadow-xl"/>
            </div>
            
        </motion.div>
    );
}
