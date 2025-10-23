import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaTelegram } from 'react-icons/fa' ;    

function Footer() {
    return (
        <footer className="bg-gray-100 py-6 mt-12">
            <div>
                <div className='grid md:grid-cols-4 gap-8 justify-between px-6'>
                    <div className='space-y-5'>
                        <h1 className='text-4xl font-sans'>noon'i</h1>
                        <p className='text-gray-700'>Test: 000(123)76-51-523</p>
                        <p className='text-gray-700'>Mon-Fri: 9am - 5pm</p>
                        <p className='text-gray-700'>Sat-sun: 10am - 4pm</p>
                    </div>
                    <div className='space-y-5'>
                        <h1 className='text-xl font-semibold'>ABOUT</h1>
                        <p className='text-gray-700'>Our Story</p>
                        <p className='text-gray-700'>Careers</p>
                        <p className='text-gray-700'>Influencers</p>
                        <p className='text-gray-700'>Join Our team</p>
                    </div>
                    <div className='space-y-5'>
                        <h1 className='text-xl font-semibold'>CUSTOMER SERVICES</h1>
                        <p className='text-gray-700'>Contact Us</p>
                        <p className='text-gray-700'>Customer Service</p>
                        <p className='text-gray-700'>Find Store</p>
                        <p className='text-gray-700'>Book appointment</p>
                        <p className='text-gray-700'>Shipping & Returns</p>
                    </div>
                    <div>
                        <div>
                            <h1 className='text-xl font-semibold'>SIGN UP FOR EMAILS</h1>
                        </div>
                        <p className='text-gray-800 mt-4'>Enjoy 15% Off your first order when sign up to our newsletter</p>
                        <div className='flex justify-center gap-2 max-sm:gap-1 mt-4'>
                            <input type="email" placeholder='Your e-mail address'
                            className='border border-gray-400 p-2 max-sm:p-1 rounded-md' />
                            <button className='bg-black text-white py-2 px-4 rounded-md hover:bg-blue-800'>Subscribe</button>
                        </div>
                        <div className='space-x-5 mt-6 flex'>
                            <button className='text-gray-800 hover:text-white transition'><FaFacebook /></button>
                            <button className='text-gray-800 hover:text-white transition'><FaInstagram /></button>
                            <button className='text-gray-800 hover:text-white transition'><FaTwitter /></button>
                            <button className='text-gray-800 hover:text-white transition'><FaTelegram /></button>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t pt-6 px-6 flex  max-sm:grid max-sm:grid-rows-3 md:justify-between items-center gap-4">
                    <div className='flex text-gray-700 gap-7'>
                        <p className='text-sm'>Privacy Policy</p>
                        <p className='text-sm'>Help</p>
                        <p className='text-sm'>FAQs</p>
                    </div>
                    <div className='flex text-gray-700'>
                        <p className='text-md'> © 2025 noon'i. All rights reserved.</p>
                    </div>
                    <div className=" flex justify-center max-sm:gap-12 mt-4"> 
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" className="h-5 " alt="Visa" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" className="h-5 " alt="MasterCard" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-5 " alt="PayPal" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
