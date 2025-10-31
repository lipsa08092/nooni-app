
import { useParams, Link } from "react-router-dom";
import { useCart } from "../Eslint/CartContext";
import img1 from "../Assects/shopImage-1.jpg";
import img2 from "../Assects/ShopImage -2.jpg";
import img3 from "../Assects/Shopimage-3.jpg";
import img4 from "../Assects/Shopimage-4.jpg";
import img5 from "../Assects/Shopimage-5.jpg";
import img7 from "../Assects/Shopimage-7.jpg";
import img8 from "../Assects/Shopimage-8.jpg";


export default function ProductContainer() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const productId = Number(id);

  const products = {
  1: {
    name: "Floor Lamp With Polyester Shade",
    price: 1009.00,
    description:
      "Elegant floor lamp with modern design, fits any living space",
    image: img7,
  },
  2: {
    name: "Solid Wood Bar Storage Cabinet",
    price: 1899.00,
    description: "Premium bar cabinet with ample storage for your needs.",
    image: img2,
  },
  3: {
    name: "Queen Size Elegant Double Bed",
    price: 399.00,
    description:
      "Queen Size Elegant Double Bed for Your Bedroom",
    image: img3,
  },
  4: {
    name: "Stylish Lamp",
    price: 2499.00,
    description:
      "stylish lamp enhance your living room.",
    image:
      img4,
  },
  5: {
    name: "Solid wooden Outdoor Chair",
    price: 1299.00,
    description:
      " Beautifully crafted solid wood outdoor chair. Perfect for your patio or garden.",
    image:
      img5,
  },

  6: {
    name: "Elegant and stylish wooden chair",
    price: 2055.00,
    description: "Elegant and stylish wooden chair",
    image:
      img1,
  },
  7: {
    name: "Beautifull LED lamp",
    price: 2055.00,
    description: "LED steel Floor lamp.",
    image:
      img8,
  },
};
  const product = products[productId];
  const handleAddToCart = () => {
    addToCart({ id: productId, ...product });
  };

  return (
    <div className="max-w-6xl  mx-auto py-16 px-6 flex flex-col md:flex-row gap-10 items-center">
      <div className="w-full md:w-1/2">
      <img
        src={product.image}
        alt={product.name}
        className="rounded-lg shadow-md w-full h-[400px] object-cover hover:scale-105 transition-transfer duration-300"
      />
      </div>
      <div className="w-full md:1/2 space-y-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">{product.name}</h1>

        <p className="mb-5 text-gray-700 text-lg">{product.description}</p>
        <div className="text-3xl font-semibold text-red-700 ">
          ${product.price}
        </div>
        <div className="flex items-center gap-4 mt-6">
        <button
          className="bg-black hover:bg-slate-800 text-white px-8 py-3 rounded-xl  shadow-md"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
        <Link
          to="/shop"
          className="text-lg font-medium text-gray-700 hover:text-red-600 transition underline"
        >
          Back to shop
        </Link>
        </div>
      </div>
    </div>
  );
}
