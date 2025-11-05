import React from "react";
import { useWishlist } from "../Eslint/WishlistContext";
import { FaRegFrown, FaRegGrinStars } from "react-icons/fa";

function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col items-center">
      <div className="flex flex-col items-center mb-12">
        <div className=" items-center flex gap-3 mb-2">
          <h1 className="text-4xl font-bold text-gray-800">
            My Wishlist
          </h1>
          <FaRegGrinStars className="text-yellow-500 text-4xl" />
        </div>
      </div>

      {wishlist.length === 0 ? (
        <div className="flex flex-col items-center text-center mt-20">
          <FaRegFrown className="text-gray-400 text-6xl mb-4" />
          <p className="text-gray-600 text-lg font-medium">
            Your wishlist is empty — start adding your favorites!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1  md:grid-cols-3 gap-10">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="border rounded-2xl p-6 shadow-md flex flex-col items-center text-center hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-48 h-48 object-cover rounded-xl mb-4"
              />
              <h2 className="text-lg font-semibold mb-2 text-gray-800">
                {item.name}
              </h2>
              <p className="text-black font-medium mb-4">₹{item.price}</p>
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="bg-red-500 text-white text-sm px-6 py-2 rounded-full hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
