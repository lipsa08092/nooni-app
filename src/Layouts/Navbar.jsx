
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
                    <button className='text-gray-700'><FaUser /></button>
                    <button className='text-gray-700'><FaHeart /></button>
                    <button className='flex text-gray-700'><FaShoppingCart /> <span className="text-sm ml-4 px-1.5 rounded-full absolute bg-red-500 text-white">{cartCount}</span></button>
                </div>
            </nav>
            
            <div
                className={`fixed top-0 left-0 h-screen w-40 bg-gray-400  z-40 transform transition-transform duration-300 ease-in-out 
                ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="flex flex-col space-y-4 text-black py-6 px-6">
                    <button
                        onClick={handleMenuToggle}
                        className="text-white text-3xl self-end focus:outline-none">
                        *
                    </button>
                    <Link to="/" onClick={handleMenuToggle} className="hover:text-gray-800 hover:underline transition">Home</Link>
                    <Link to="/shop" onClick={handleMenuToggle} className="hover:text-gray-900 transition">Shop</Link>
                    {/* <Link to="/products" onClick={handleMenuToggle} className="hover:text-gray-800 transition">Products</Link> */}
                </div>
            </div>
        </div>
    )
}

export default Navbar

