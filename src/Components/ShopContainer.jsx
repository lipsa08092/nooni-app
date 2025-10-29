import React from 'react'
import { Link } from "react-router-dom";
import { Swiper , SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'; 
import 'swiper/css/autoplay';
import { Navigation , Pagination , Autoplay } from 'swiper/modules';
import lamp from "../Assects/banner-lamp.jpg";
import banner from "../Assects/banner-decor.jpg";
import stool from "../Assects/banner-Stool.jpg";
import img1 from "../Assects/shopImage-1.jpg";
import img2 from "../Assects/ShopImage -2.jpg";
import img3 from "../Assects/Shopimage-3.jpg";
import img4 from "../Assects/Shopimage-4.jpg";
import img5 from "../Assects/Shopimage-5.jpg";
import img7 from "../Assects/Shopimage-7.jpg";
import img8 from "../Assects/Shopimage-8.jpg";


const Categories =[
    {
    id:1,
    name: "Table",
    product: 5,
    image: "https://i5.walmartimages.com/seo/Solid-Wood-Coffee-Table-Circle-Center-Table-Modern-Farmhouse-Living-Room-Coffee-Table-Round-Natural-Oak-Finish_34152456-760f-4775-9a80-230abe1ef722.778be26ac8c6eee6b8a131539e03337b.jpeg"
},
{
    id:2,
    name: "Chair",
    product: 8,
    image:"https://m.media-amazon.com/images/I/71q32o2in-L.jpg"
},
{
    id:3,
    name: "Lamp",
    product: 4,
    image:"https://plus.unsplash.com/premium_photo-1668005190411-1042cd38522e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387"
},
{
    id:4,
    name: "Sofa",
    product: 6,
    image:"https://tse1.mm.bing.net/th/id/OIP.bPy80OVkc9HPbHlETmk0-gHaHa?pid=Api&P=0&h=180"
},
{
    id:5,
    name: "Cabinet",
    product: 3,
    image:"https://m.media-amazon.com/images/I/81E0cdBMBrL._AC_SL1500_.jpg"
},
{
    id:6,
    name: "Bed",
    product: 7,
    image:"https://images.unsplash.com/photo-1635594202056-9ea3b497e5c0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1480"
},
{
    id:7,
    name: "Dining",
    product: 4,
    image:"https://images.unsplash.com/photo-1615803795991-80ce0f7c4770?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387"
},
{
    id:8,
    name: "Decor",
    product: 9,
    image:"https://images.unsplash.com/photo-1584589167171-541ce45f1eea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387"
},
{
    id:9,
    name: "Storage",
    product: 2,
    image:"https://plus.unsplash.com/premium_photo-1732449368194-655ad29627db?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=498"
},{
    id:10,
    name: "Outdoor",
    product: 5,
    image:"https://plus.unsplash.com/premium_photo-1687960116947-11ecc22f45c0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387"
},
{
    id:11,
    name: "Office",
    product: 6,
    image:"https://plus.unsplash.com/premium_photo-1745598762932-be509076fca0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=388"
}]

const products = [
    {
        id: 1,
        name: "Floor Lamp With Polyester Shade",
        price: 1009.00,
        image: img7,
    },
    {
        id: 2,
        name: "Solid Wood Bar Storage Cabinet",
        price: 1899.00,
        image: img2,
    },
    {
        id: 3,
        name: "Queen Size Elegant Double Bed",
        price: 399.00,
        image: img3,
    },
    {
        id: 4,
        name: "Stylish Lamp",
        price: 2499.00,
        image:img4,
    },
    {
        id: 5,  
        name: "Solid wooden Outdoor Chair",
        price: 1599.00,
        image:img5,
    },
    
    {
        id: 6,  
        name: "Elegant and stylish wooden chair",
        price: 1599.00,
        image:img1,
    },{
        id: 7,  
        name: " Beautifull LED Lamp",
        price: 1599.00,
        image:img8,
    },
    ];

export default function ShopContainer() {
    return (
            <div>
                {/* Image Slider */}
                <section className='py-16 bg-gray-50'>
                    <div className='max-w-7xl mx-auto px-6'>
                        <h2 className='text-2xl font-bold mb-10'>SHOP BY CATEGORY</h2>
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={30}
                            slidesPerView={5}
                            autoplay={{ delay: 2000 }}
                        >
                            {Categories.map((category) => (
                                <SwiperSlide key={category.id}>
                                    <div className='mx-auto bg-white rounded-full shadow-md w-40 h-40 flex item-center justify-center overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300'>
                                        <div className=' flex flex-col items-center text-center'>
                                            <div>
                                                <img src={category.image} alt={category.name} className='object-cover rounded-full' />
                                            </div>
                                            <div className='absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 duration-300 items-center justify-center'>
                                                <div className='text-white text-lg text-center py-10 font-semibold'>Shop {category.name}</div>
                                            </div>
                                        </div>
                                    </div>
                                        <div className='ml-12'>
                                            <h3 className='font-semibold mt-4'>{category.name}</h3>
                                            <p className='text-gray-500 text-sm'>{category.product} Products</p>
                                        </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </section> 

                {/* 3 Image Container */}
                <div className="px-8 py-10 min-h-screen space-y-8">
                    <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-8">
                        <div className="relative bg-white  overflow-hidden flex flex-col justify-between">
                     {/* Lamp Image */}
                        <div className="relative">
                            <img
                                src={lamp}
                                alt="Lamp"
                                className="w-full h-[300px] object-cover"/>
                            <div className="absolute top-10 left-8 space-y-3 text-black">
                                <h2 className="text-5xl  max-sm:text-3xl font-semibold leading-tight">Up To 40% Off <br /> Top Lamp Brands</h2>
                                <a href="#" className="underline font-medium text-sm text-gray-800 hover:text-blue-800 transition">SHOP NOW </a>
                            </div>
                        </div>

                        {/* Cabinet Banner */}
                        <div className="relative w-full h-72 ml-7 bg-cover bg-center p-10 flex flex-col justify-between text-black"
                            style={{ backgroundImage: `url(${banner})` }}>
                            <div>
                                <span className="text-sm max-sm:text-xs">NEW PRODUCTS</span>
                                <h2 className="text-2xl max-sm:text-lg font-bold mt-2 mb-3">Up To 25% Off Cabinets</h2>
                                <a href="#" className="underline font-medium text-sm text-gray-800 hover:text-blue-800 transition">SHOP NOW</a>
                            </div>
                        </div>
                    </div>

                        {/* right Stool */}
                        <div
                            className="h-[600px] relative bg-cover bg-center flex items-center justify-center p-6"
                            style={{ backgroundImage: `url(${stool})` }}>
            
                            <div className=" absolute top-0 p-8 text-center text-white space-y-4">
                                <span className="text-lg max-sm:text-sm font-semibold tracking-wide">BIG SALE</span>
                                <h2 className="text-5xl max-sm:text-3xl font-bold leading-tight">Up to 70% Off <br /> Furniture & Decor</               h2>
                                <a href="#" className="underline font-medium text-md max-sm:text-sm text-gray-100 hover:text-blue-300 transition">SHOP NOW</a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-pink-200 ml-6 flex flex-col sm:flex-row items-center p-16 gap-5">
                        <span className="text-7xl font-bold text-black mr-3 ">10%</span>
                        <div>
                            <span className=" text-3xl font-normal">Get More Pay Less</span>
                            <div className="text-lg text-black">On orders $500 + Use Coupon Code: <span className="font-bold">WSD10</span></div>
                        </div>
                    </div>
                </div>

                {/* See All Products */}
                <div className="max-w-7xl mx-auto px-6 py-10">
                    <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-8">
                        <div className='space-y-8' >
                            <h2 className='text-6xl font-sans mt-10'>Best <br />Morden <br />Furniture </h2>
                            <button className='text-xl hover:underline hover:text-red-600 hover:text-lg'>See All-- </button>
                        </div>
                        {products.map((item) => (
                        <div key={item.id} className="bg-white  shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300">
                            <div className='w-full h-85 overflow-hidden'>
                                <img src={item.image} alt={item.name} class="w-full h-85 object-cover object-center "/>
                            </div>
                            <div className="flex-1 p-5 flex flex-col justify-between">
                                <h3 className="font-semibold text-md mb-2 text-gray-800">{item.name}</h3>
                                <p className="text-gray-900 mb-3">${item.price}</p>
                                <Link
                                to={`/product/${item.id}`}
                                className="w-full inline-block px-6 py-2 text-black text-center hover:bg-red-800 hover:text-white transition-all duration-300"
                                >
                                VIEW DETAILS
                                </Link>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    };   