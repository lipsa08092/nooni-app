import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaTelegram,
} from "react-icons/fa";
import logo from "../Assects/logo.png"

function Footer() {
  return (
    <footer className="bg-gray-100 py-10 mt-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <img src={logo} alt="logo"  className="h-10 mb-10"/>
            <p className="text-gray-500  ">Tel: 000 (123) 76-51-523</p>
            <p className="text-gray-500 ">Mon-Fri: 9am - 5pm</p>
            <p className="text-gray-500 ">Sat-Sun: 10am - 4pm</p>
          </div>
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">ABOUT</h2>
            <p className="text-gray-500   hover:text-red-700 cursor-pointer">Our Story</p>
            <p className="text-gray-500   hover:text-red-700 cursor-pointer">Careers</p>
            <p className="text-gray-500   hover:text-red-700 cursor-pointer">Influencers</p>
            <p className="text-gray-500   hover:text-red-700 cursor-pointer">Join Our Team</p>
          </div>
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">CUSTOMER SERVICES</h2>
            <p className="text-gray-500   hover:text-red-700 cursor-pointer">Contact Us</p>
            <p className="text-gray-500   hover:text-red-700 cursor-pointer">Customer Service</p>
            <p className="text-gray-500   hover:text-red-700 cursor-pointer">Find Store</p>
            <p className="text-gray-500   hover:text-red-700 cursor-pointer">Book Appointment</p>
            <p className="text-gray-500   hover:text-red-700 cursor-pointer">Shipping & Returns</p>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">SIGN UP FOR EMAILS</h2>
            <p className="text-gray-500">
              Enjoy 15% off your first order when you sign up for our newsletter.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-gray-200 px-3 py-2  w-full outline-none"
              />
              <button className="bg-black text-white px-5 py-2  hover:bg-gray-800 transition">
                Subscribe
              </button>
            </div>
            <div className="flex space-x-5 mt-6 text-2xl">
              <FaFacebook className="text-gray-800 hover:text-blue-600 transition cursor-pointer" />
              <FaInstagram className="text-gray-800 hover:text-pink-500 transition cursor-pointer" />
              <FaTwitter className="text-gray-800 hover:text-sky-500 transition cursor-pointer" />
              <FaTelegram className="text-gray-800 hover:text-blue-400 transition cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 flex flex-col sm:flex-row justify-between items-center gap-6 text-gray-500">
          <div className="flex gap-6 text-sm">
            <p className="hover:text-black cursor-pointer">Privacy Policy</p>
            <p className="hover:text-black cursor-pointer">Help</p>
            <p className="hover:text-black cursor-pointer">FAQs</p>
          </div>

          <p className="text-sm text-center">
            © 2025 <span className="font-semibold">noon'i</span>. All rights reserved.
          </p>

          <div className="flex gap-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
              className="h-5"
              alt="Visa"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
              className="h-5"
              alt="MasterCard"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
              className="h-5"
              alt="PayPal"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
