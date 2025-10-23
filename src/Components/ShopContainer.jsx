import React from 'react'
import { Link } from "react-router-dom";
// import ShopSlider from './ShopSlider';
import { Swiper , SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'; 
import 'swiper/css/autoplay';
import { Navigation , Pagination , Autoplay } from 'swiper/modules';


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
        name: "Wood Outdoor Adirondack Chair",
        price: 1009,
        image: "https://plus.unsplash.com/premium_photo-1705169612592-32610774a5d0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=840",
    },
    {
        id: 2,
        name: "Solid Wood Bar Storage Cabinet",
        price: 1899,
        image: "https://images.unsplash.com/photo-1601760561441-16420502c7e0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
    },
    {
        id: 3,
        name: "Floor Lamp With Polyester Shade",
        price: 399,
        image: "https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
    },
    {
        id: 4,
        name: "Modern Sofa Set",
        price: 2499,
        image:"https://tse1.mm.bing.net/th/id/OIP.bPy80OVkc9HPbHlETmk0-gHaHa?pid=Api&P=0&h=180"
    },
    {
        id: 5,  
        name: "Queen Size Bed Frame",
        price: 1599,
        image:"https://images.unsplash.com/photo-1635594202056-9ea3b497e5c0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1480https://images.unsplash.com/photo-1635594202056-9ea3b497e5c0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1480"
    },
    {
        id:6,
        name: "Beautifull Dining Table",
        price:2055,
        image:"https://images.unsplash.com/photo-1615803796379-b4cda8e9c09c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870"
    }
    ];

export default function ShopContainer() {
    return (
            <div>
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
                                    <div className='mx-auto, bg-white rounded-full shadow-md w-40 h-40 flex item-center justify-center overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300'>
                                        <div className=' flex flex-col items-center text-center'>
                                            <div>
                                                <img src={category.image} alt={category.name} className='object-cover rounded-full' />
                                            </div>
                                            <div className='absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 duration-300 flex items-center justify-center'>
                                                <div className='text-white text-lg font-semibold'>Shop {category.name}</div>
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
                <div className="max-w-6xl mx-auto p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {products.map((item) => (
                        <div key={item.id} className="bg-white rounded-lg shadow">
                            <img src={item.image} alt={item.name} className="w-full h-56 object-cover rounded-t-lg"/>
                            <div className="p-5">
                                <h3 className="font-bold text-lg mb-2">{item.name}</h3>
                                <p className="text-gray-600 mb-2">${item.price}</p>
                                <Link
                                to={`/product/${item.id}`}
                                className="inline-block px-6 py-2 bg-black text-white rounded hover:bg-red-800 transition"
                                >
                                View details
                                </Link>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    };   