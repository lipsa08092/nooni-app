import { Link } from "react-router-dom";
import { useState } from "react";
import { FaSearch, FaUser, FaHeart, FaShoppingCart ,FaSignOutAlt } from "react-icons/fa";
import { useCart } from "../Eslint/CartContext";
// import { useNavigate } from "react-router-dom";
import { useUser} from "../Eslint/UserContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);
//   const navigate = useNavigate();
  const { cartCount } = useCart();
  const { user, login, logout } = useUser();
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });

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

  return (
    <div>
      <nav className="bg-white shadow-lg text-2xl top-0 z-50 flex max-sm:flex-col max-sm:space-y-3 justify-between items-center py-4 px-6">
        <div className="flex items-center gap-4 ">
          <button onClick={handleMenuToggle} className="text-gray-700">☰</button>
          <button className="text-gray-700">
            <FaSearch />
          </button>
        </div>
        <div className="text-center">
          <p className="text-6xl max-sm:text-6xl italic font-sans font-light">
            noon'i
          </p>
        </div>
        <div className="flex items-center gap-4 max-sm:gap-6 max-sm:pt-5">
          <div
            className="relative"
            onMouseEnter={handleUserMouseEnter}
            onMouseLeave={handleUserMouseLeave}
          >
            <button className="text-gray-700 hover:text-black transition">
              <FaUser />
            </button>

            {userDropdown && (
              <div className="absolute mt-2 w-80 right-0 bg-white border transform transition-all ease-out p-6 z-50 rounded-lg shadow-md">
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
                  <div className="flex flex-col space-y-3">
                    <p className="font-semibold text-lg border-b pb-2">
                      Hello, {user.name} !!!
                    </p>
                    <button
                      className="hover:text-blue-700  mb-2 text-sm text-left flex gap-3"
                    >
                      <FaUser/>My Profile
                    </button>
                    <button
                      className="hover:text-blue-700 mb-2 text-sm text-left flex gap-3"
                    >
                     <FaShoppingCart/> Orders
                    </button>
                    <button
                      className="hover:text-blue-700 text-sm mb-2 text-left flex gap-3"
                    >
                     <FaHeart/> Wishlist
                    </button>
                    <button
                      onClick={logout}
                      className="text-red-500 hover:text-red-700  mb-2 text-sm text-left flex gap-3"
                    >
                      <FaSignOutAlt/> Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          <button className="text-gray-700">
            <FaHeart />
          </button>
          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-gray-700" />
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              {cartCount}
            </span>
          </Link>
        </div>
      </nav>

      <div
        className={`fixed top-0 left-0 h-screen w-[20%] backdrop:blur-md  bg-gray-300  bg-black-300/20 z-40 transform transition-transform duration-300 ease-in-out 
                ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex flex-col space-y-4 text-black py-6 px-6">
          <button
            onClick={handleMenuToggle}
            className="text-black text-3xl self-start"
          >
            *
          </button>
          <Link
            to="/"
            className="hover:text-gray-700 hover:underline transition text-black"
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="hover:text-gray-700 transition text-black hover:underline"
          >
            Shop
          </Link>
          <Link
            to="/blog"
            className="hover:text-gray-800 transition text-blacl hover:underline "
          >
            Blog
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
