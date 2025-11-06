import React from "react";
import blog1 from "../Assects/blog-1.jpg";
import blog2 from "../Assects/blog-2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

function BlogContainer() {
  const blogs = [
    {
      id: 1,
      img: blog1,
      date: "JAN 9, 2025",
      category: "CHAIR, FURNITURE",
      title: "The Secrets to a Living Room that Draws You In",
      description: "Nunc ut sem ut ex sollicitudin commodo. Suspendisse non enim felis. Nam nec diam ultricies, malesuada,Nunc ut sem ut ex sollicitudin commodo. Suspendisse non enim felis. Nam nec diam ultricies, malesuada.",
    },
    {
      id: 2,
      img: blog2,
      date: "JAN 9, 2025",
      category: "CHAIR, FURNITURE",
      title: "What is Feng Shui and How Can I Use It When I Decorate?",
      description: "Nunc ut sem ut ex sollicitudin commodo. Suspendisse non enim felis. Nam nec diam ultricies, malesuada,Nunc ut sem ut ex sollicitudin commodo. Suspendisse non enim felis. Nam nec diam ultricies, malesuada.",
    },
    {
      id: 3,
      img: blog1,
      date: "JAN 9, 2025",
      category: "CHAIR, FURNITURE",
      title: "Minimalist Furniture Ideas for Modern Homes",
      description: "Nunc ut sem ut ex sollicitudin commodo. Suspendisse non enim felis. Nam nec diam ultricies, malesuada,Nunc ut sem ut ex sollicitudin commodo. Suspendisse non enim felis. Nam nec diam ultricies, malesuada.",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto py-10">
      <div className="text-2xl md:text-3xl font-bold mt-5 mb-6 ">
        <h2>OUR BLOG</h2>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1.25}
        spaceBetween={30}
        loop={true}
        centeredSlides={false}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="pb-10"
      >
        {blogs.map((blog) => (
          <SwiperSlide key={blog.id}>
            <div className="flex flex-col md:flex-row gap-10 justify-between items-center  p-4">
              <div className="relative w-full md:w-1/2 group bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 cursor-pointer ">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-64 md:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-white text-black px-2 py-1 text-sm rounded-sm shadow-sm">
                  {blog.date}
                </span>
              </div>
              <div className="w-full md:w-1/2 space-y-3 md:text-left">
                <p className="text-gray-500 text-sm font-medium hover:text-red-700 transition">
                  {blog.category}
                </p>
                <h2 className="text-2xl max-sm:text-xl font-semibold text-gray-900 hover:text-red-700 transition">
                  {blog.title}
                </h2>
                <p className="text-gray-500">{blog.description}</p>
                <button className="font-semibold text-red-700 hover:text-red-900 underline transition">
                  READ MORE
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default BlogContainer;
