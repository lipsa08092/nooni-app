import React from "react";
import { useCart } from "../Eslint/CartContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaCarSide } from "react-icons/fa";

export default function CartContainer() {
    const { cartItems, removeFromCart } = useCart();
    const [orderPlaced, setOrderPlaced] = useState(false);

    const subtotal = cartItems.reduce((total,item) => total + item.price, 0);


const handlePlaceOrder = () => {
    setOrderPlaced(true);
};
if (orderPlaced) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
            <h1 className="text-3xl font-bold text-green-600 mb-4">Order Placed Successfully!</h1>
            <p className="text-gray-600 mb-6">Thank you for your purchase. Your order is being processed.</p>
            <Link to="/shop" className="bg-black text-white px-6 py-2 rounded-lg hover:bg-red-800 transition">Continue Shopping</Link>
        </div>
    );
};

    return (
    <div className="max-w-5xl mx-auto py-16 px-6 text-center">
        <h1 className="text-3xl font-semibold mb-8 underline">Shopping Cart</h1>

        {cartItems.length === 0 ? (
        <div className="text-center">
            <p className="text-gray-600 mb-4">Your cart is Currently empty.</p>
            <Link
            to="/shop"
            className="bg-black text-white px-6 py-2 rounded hover:bg-red-800 transition"
            >
            Return to Shop
            </Link>
        </div>
        ) : (
        <div className="space-y-6">
            {cartItems.map((item) => (
            <div key={item.id} className="flex flex-col md:flex-row items-center justify-between border-b pb-4">
                <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded"
                />
            <div className="flex flex-col gap-5 mt-3">
                <h2 className="text-lg font-light">{item.name}</h2>
                <p className="text-gray-900 mt-1 ">Price: ${item.price}</p>
            </div>
            <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-700 transition mt-5"
            >
                Remove
            </button>
            <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-700 transition mt-5"
            >
                Remove
            </button>
            </div>
        ))}
            <div className="flex flex-col md:flex-row justify-between bg-gray-200 border-t p-6 mt-8 rounded-lg shadow-sm max-w-5xl mx-auto">
                <div className="w-full space-y-6">
                    <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-300 pb-2">CART TOTALS</h2>
                    <div className="flex justify-between border-b border-gray-300 pb-3">
                        <p className="text-gray-700">Subtotal:</p>
                        <p className="font-bold">${subtotal.toFixed(2)}</p>
                    </div>
                    <div className="mt-4">
                        <div className="flex">
                            <p className="text-gray-700 font-medium mb-2">Shipping:</p>
                        </div>
                        <div className="flex items-center gap-2 mb-2 mt-2">
                            <input type="checkbox" className="accent-black" />
                            <p>Flat rate: $10</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" className="accent-black" />
                            <p>Local pickup: $5</p>
                        </div>
                        <div className="flex">
                            <p className="italic text-gray-600 text-md mt-4">Shipping options will be updated during checkout.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 border-b border-gray-300 pb-3 mt-6">
                        <button className="text-gray-800 text-2xl"><FaCarSide /></button>
                        <p className="font-bold text-gray-800">Calculate Shipping</p>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-300 pb-3 mt-4">
                        <p className="text-gray-700 text-lg">Total:</p>
                        <p className="font-bold text-lg">${subtotal.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center justify-center  w-full  mt-6 md:mt-0">
                        <button onClick={handlePlaceOrder}
                            className="bg-black text-white w-full px-10 py-3 rounded-lg hover:bg-green-700 transition-all duration-300 shadow-md">
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
        )}
    </div>
    );
}
