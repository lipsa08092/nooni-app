import React from 'react'
import blog1 from "../Assects/blog-1.jpg";
import blog2 from "../Assects/blog-2.jpg";
import { Swiper , SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'; 
import 'swiper/css/autoplay';
import { Navigation , Pagination , Autoplay } from 'swiper/modules';

function BlogContainer() {
    return (
        <div className='w-full max-w-8xl mx-auto px-4 md:px-8 py-10'>
            <div className=' text-2xl md:3xl font-bold mt-5 p-5'>
                <h2>OUR BLOG</h2>
            </div>
            
            <Swiper
                modules={[Navigation,Pagination, Autoplay]}
                slidesPerView={1}
                autoplay={{delay: 4000}}
                pagination={{clickable:true}}
                spaceBetween={30}
                className='pb-10'
            >
            <SwiperSlide>
            <div className=' max-w-5xl flex-col md:flex-row overflow-hidden lg:flex lg:gap-10 justify-between items-center gap-4 p-4'>
                <div className='relative mt-5 p-4 w-full md:w-1/2'>
                    <img src={blog1} alt="" className='w-full h-64 md:h-80 object-cover rounded-md' />
                    <span className='absolute top-4 bg-slate-50 text-black p-1 rounded-sm text-sm ml-2 mt-3'>JAN 9 , 2025</span>
                </div>

                <div className="w-full md:w-1/2 space-y-3 text-center md:text-left">
                    <p className="text-gray-600 text-sm font-medium hover:text-red-700 ">CHAIR, FURNITURE</p>
                    <h2 className="text-2xl font-semibold text-gray-900 hover:text-red-700 ">
                        The Secrets to a Living Room <br /> that Draws You In
                    </h2>
                    <p className="text-gray-700">Nunc ut sem ut ex sollicitudin commodo. Suspendisse non enim felis. Nam nec diam ultricies, malesuadaNunc ut sem ut ex sollicitudin commodo. Suspendisse non enim felis. Nam nec diam ultricies, malesuadaNunc ut sem ut ex sollicitudin commodo. Suspendisse non enim felis. Nam nec diam ultricies, malesuada.</p>
                    <button className="font-semibold text-red-700 hover:text-red-900 underline">READ MORE</button>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className=' max-w-5xl flex-col md:flex-row overflow-hidden lg:flex lg:gap-10 justify-between items-center gap-4 p-4'>
                <div className='relative mt-5 p-4 w-full md:w-1/2'>
                    <img src={blog2} alt="" className='w-full h-64 md:h-80 object-cover rounded-md' />
                    <span className='absolute top-4 bg-slate-50 text-black p-1 rounded-sm text-sm ml-2 mt-3'>JAN 9 , 2025</span>
                </div>

                <div className="w-full md:w-1/2 space-y-3 text-center md:text-left">
                    <p className="text-gray-600 text-sm font-medium hover:text-red-700 ">CHAIR, FURNITURE</p>
                    <h2 className="text-2xl font-semibold text-gray-900 hover:text-red-700 ">
                        What is Feng Shui and <br /> How Can I Use It When I Decorate?
                    </h2>
                    <p className="text-gray-700">Nunc ut sem ut ex sollicitudin commodo. Suspendisse non enim felis. Nam nec diam ultricies, malesuadaNunc ut sem ut ex sollicitudin commodo. Suspendisse non enim felis. Nam nec diam ultricies, malesuadaNunc ut sem ut ex sollicitudin commodo. Suspendisse non enim felis. Nam nec diam ultricies, malesuada.</p>
                    <button className="font-semibold text-red-700 hover:text-red-900 underline">READ MORE</button>
                </div>
            </div>
            </SwiperSlide>
            </Swiper>
            
        </div>
    )
}

export default BlogContainer
