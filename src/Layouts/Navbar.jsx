
import { Link } from "react-router-dom";
import { useState } from 'react';
import { FaSearch, FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { useCart } from "../Eslint/CartContext"


function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { cartCount } = useCart();

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    }

    

    return (
        <div >
            <nav className="bg-white shadow-lg text-2xl top-0 z-50 flex max-sm:flex-col max-sm:space-y-3 justify-between items-center py-4 px-6">
                <div className="flex items-center gap-4 "> 
                    <button onClick={handleMenuToggle} className='text-gray-700 focus: outline-none'> ☰ </button>
                    <button className='text-gray-700'><FaSearch /></button>
                </div>
                <div className="text-center">
                    <p className="text-6xl max-sm:text-6xl italic font-sans font-light">noon'i</p>
                </div>
                <div className="flex items-center gap-4 max-sm:gap-6 max-sm:pt-5">
                    <Link to="/login" className='text-gray-700'><FaUser /></Link>
                    <button className='text-gray-700'><FaHeart /></button>
                    <Link to="/cart" className="relative">
                        <FaShoppingCart className="text-gray-700" />
                        <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                        {cartCount}</span>
                    </Link>

                </div>
            </nav>
            
            <div className={`fixed top-0 left-0 h-screen w-40 bg-white z-40 transform transition-transform duration-300 ease-in-out 
                ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="flex flex-col space-y-4 text-black py-6 px-6">
                    <button
                        onClick={handleMenuToggle}
                        className="text-black text-3xl self-start">
                        *
                    </button>
                    <Link to="/" className="hover:text-gray-700 hover:underline transition text-black">Home</Link>
                    <Link to="/shop" className="hover:text-gray-700 transition text-black hover:underline">Shop</Link>
                    <Link to="/blog" className="hover:text-gray-800 transition text-blacl hover:underline ">Blog</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar

