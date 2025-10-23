
import { useParams, Link } from "react-router-dom";
import { useCart } from "../Eslint/CartContext";

const products = {
  1: {
    name: "Wood Outdoor Adirondack Chair",
    price: 1009,
    description:
      "Beautifully crafted solid wood outdoor chair. Perfect for your patio or garden.",
    image:
      "https://plus.unsplash.com/premium_photo-1705169612592-32610774a5d0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=840",
  },
  2: {
    name: "Solid Wood Bar Storage Cabinet",
    price: 1899,
    description: "Premium bar cabinet with ample storage for your needs.",
    image:
      "https://images.unsplash.com/photo-1601760561441-16420502c7e0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
  },
  3: {
    name: "Floor Lamp With Polyester Shade",
    price: 399,
    description:
      "Elegant floor lamp with modern design, fits any living space.",
    image:
      "https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
  },
  4: {
    name: "Modern Sofa Set",
    price: 2499,
    description:
      "Comfortable and stylish sofa set to enhance your living room.",
    image:
      "https://tse1.mm.bing.net/th/id/OIP.bPy80OVkc9HPbHlETmk0-gHaHa?pid=Api&P=0&h=180",
  },
  5: {
    name: "Queen Size Bed Frame",
    price: 1299,
    description:
      "Sturdy and elegant queen size bed frame for a good night's sleep.",
    image:
      "https://images.unsplash.com/photo-1635594202056-9ea3b497e5c0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1480https://images.unsplash.com/photo-1635594202056-9ea3b497e5c0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1480",
  },
  6: {
    name: "Beautifull Dining Table",
    price: 2055,
    description: "Elegant and stylish Dining set to enhance your Diving room.",
    image:
      "https://images.unsplash.com/photo-1615803796379-b4cda8e9c09c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
  },
};

export default function ProductContainer() {
  const { id } = useParams();
  const product = products[id];
  const { setCartCount, cartCount } = useCart();

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="max-w-6xl  mx-auto py-16 px-6 flex flex-col md:flex-row gap-10 items-center">
      <img
        src={product.image}
        alt={product.name}
        className="rounded-lg shadow-md w-full md:w-1/2 object-cover"
      />
      <div>
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        <p className="mb-5 text-gray-700">{product.description}</p>
        <div className="text-2xl font-semibold text-black mb-8">
          ${product.price}
        </div>
        <button
          className="bg-black text-white px-8 py-3 rounded hover:bg-red-800 transition"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
        <Link
          to="/shop"
          className="text-md/ ml-4 text-gray-800 hover:underline"
        >
          Back to shop
        </Link>
      </div>
    </div>
  );
}
