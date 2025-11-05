import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  FaSistrix,
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaSignOutAlt,
} from "react-icons/fa";
import { useCart } from "../Eslint/CartContext";
import { useNavigate } from "react-router-dom";
import { useUser } from "../Eslint/UserContext";
import logo from "../Assects/logo.png";
import { useWishlist } from "../Eslint/WishlistContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);
  const navigate = useNavigate();
  const { cartCount } = useCart();
  const { user, login, logout } = useUser();
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const { wishlist } = useWishlist();

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  const handleUserMouseEnter = () => setUserDropdown(true);
  const handleUserMouseLeave = () => setUserDropdown(false);

  const handleSignIn = () => {
    if (loginForm.username && loginForm.password) {
      login(loginForm.username);
      setUserDropdown(false);
      alert(`Welcome, ${loginForm.username}!`);
    } else {
      alert("Please fill in both fields");
    }
  };

  useEffect(() => {
    if (!user) {
      setLoginForm({ username: "", password: "" });
    }
  }, [user]);

  return (
    <div>
      <nav className="bg-gray-50 sticky top-0 z-50 shadow-md flex justify-between items-center py-4 px-6 max-sm:flex-col max-sm:space-y-3">

        <div className="flex items-center gap-4 ">
          <button onClick={handleMenuToggle} className="text-gray-700">
            ☰
          </button>
          <button className="text-gray-700">
            <FaSistrix />
          </button>
        </div>
        <div className="text-center">
          <img src={logo} alt="logo" className="h-9" />
        </div>
        <div className="flex items-center gap-8 max-sm:gap-6 max-sm:pt-5">
          <div
            className="relative"
            onMouseEnter={handleUserMouseEnter}
            onMouseLeave={handleUserMouseLeave}
          >
            <button
              onDoubleClick={() => navigate("/")}
              className="text-gray-700 hover:text-black transition"
            >
              <FaUser />
            </button>

            {userDropdown && (
              <div className="absolute mt-2 w-80 max-sm:w-52 -translate-x-1/2  bg-white border transform transition-all ease-out p-6 z-50 rounded-lg shadow-md">
                {!user ? (
                  <div className="flex flex-col space-y-4">
                    <input
                      type="text"
                      className="border px-3 py-2 rounded text-sm"
                      placeholder="Username"
                      value={loginForm.username}
                      onChange={(e) =>
                        setLoginForm({
                          ...loginForm,
                          username: e.target.value,
                        })
                      }
                    />
                    <input
                      type="password"
                      className="border px-3 py-2 rounded text-sm"
                      placeholder="Password"
                      value={loginForm.password}
                      onChange={(e) =>
                        setLoginForm({
                          ...loginForm,
                          password: e.target.value,
                        })
                      }
                    />
                    <button
                      className="px-6 py-2 bg-black text-white rounded text-sm hover:bg-gray-800"
                      onClick={handleSignIn}
                    >
                      SIGN IN
                    </button>
                    <label className="text-sm flex items-center">
                      <input type="checkbox" className="mr-2" /> Remember me
                    </label>
                  </div>
                ) : (
                  <div className="flex flex-col space-y-3 w-full ">
                    <p className="font-semibold text-blue-700 text-lg border-b pb-2 break-words">
                      Hello, {user.name} !!!
                    </p>
                    <button
                      onClick={() => {
                        navigate("/profile");
                      }}
                      className="hover:text-blue-700  mb-2 text-sm  flex gap-3 "
                    >
                      <FaUser className="mt-1" />
                      My Profile
                    </button>
                    <button className="hover:text-blue-700 mb-2 text-sm  flex gap-3">
                      <FaShoppingCart className="mt-1" /> Orders
                    </button>
                    <button className="hover:text-blue-700 text-sm mb-2 flex gap-3">
                      <FaHeart className="mt-1" /> Wishlist
                    </button>
                    <button
                      onClick={logout}
                      className="text-red-500 hover:text-red-700  mb-2 text-sm text-left flex gap-3"
                    >
                      <FaSignOutAlt className="mt-1" /> Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          <Link
            to="/wishlist"
            className="relative"
            onDoubleClick={() => navigate("/shop")}
          >
            <FaHeart className="text-2xl text-gray-700" />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-1.5">
              {wishlist.length}
            </span>
          </Link>
          <Link
            to="/cart"
            className="relative"
            onDoubleClick={() => navigate("/shop")}
          >
            <FaShoppingCart className="text-gray-700" />
            <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold rounded-full px-1.5">
              {cartCount}
            </span>
          </Link>
        </div>
      </nav>
            
      <div
        className={`fixed top-0 left-0 h-screen lg:w-[20%] backdrop:blur-md bg-gray-300 z-50 transform transition-transform duration-300 ease-in-out 
        ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex flex-col space-y-6 text-black py-6 px-6">
          <button
            onClick={handleMenuToggle}
            className="text-black text-3xl self-start"
          >
            *
          </button>
          <Link
            to="/"
            className="hover:text-gray-700 md:text-2xl md:ml-7 hover:underline transition text-black"
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="hover:text-gray-700 md:text-2xl md:ml-7 transition text-black hover:underline"
          >
            Shop
          </Link>
          <Link
            to="/blog"
            className="hover:text-gray-700 md:text-2xl md:ml-7 transition text-black hover:underline "
          >
            Blog
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
