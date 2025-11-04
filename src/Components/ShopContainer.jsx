import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
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
import dining from "../Assects/table-1.jpg";
import decor from "../Assects/lamp-1.jpg";
import outdoor from "../Assects/chair-1.jpg";
import office from "../Assects/bed-1.jpg";
import cabinet from "../Assects/cabinet-1.jpg";
import { FaRegHeart } from "react-icons/fa";

const Categories = [
  {
    id: 1,
    name: "Table",
    product: 5,
    image: dining,
  },
  {
    id: 2,
    name: "Chair",
    product: 8,
    image: outdoor,
  },
  {
    id: 3,
    name: "Lamp",
    product: 4,
    image: decor,
  },
  {
    id: 4,
    name: "Sofa",
    product: 6,
    image: img5,
  },
  {
    id: 5,
    name: "Cabinet",
    product: 3,
    image: cabinet,
  },
  {
    id: 6,
    name: "Bed",
    product: 7,
    image: office,
  },
  {
    id: 7,
    name: "Table",
    product: 4,
    image: dining,
  },
  {
    id: 8,
    name: "Lamp",
    product: 9,
    image: decor,
  },
  {
    id: 9,
    name: "Storage",
    product: 2,
    image:
      "https://plus.unsplash.com/premium_photo-1732449368194-655ad29627db?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=498",
  },
  {
    id: 10,
    name: "Chair",
    product: 5,
    image: outdoor,
  },
  {
    id: 11,
    name: "Bed",
    product: 6,
    image: office,
  },
];

const products = [
  {
    id: 1,
    name: "Floor Lamp With Polyester Shade",
    price: 1009.0,
    image: img7,
  },
  {
    id: 2,
    name: "Solid Wood Bar Storage Cabinet",
    price: 1899.0,
    image: img2,
  },
  {
    id: 3,
    name: "Queen Size Elegant Double Bed",
    price: 399.0,
    image: img3,
  },
  {
    id: 4,
    name: "Stylish Lamp",
    price: 2499.0,
    image: img4,
  },
  {
    id: 5,
    name: "Solid wooden Outdoor Chair",
    price: 1599.0,
    image: img5,
  },

  {
    id: 6,
    name: "Elegant and stylish wooden chair",
    price: 1599.0,
    image: img1,
  },
  {
    id: 7,
    name: " Beautifull LED Lamp",
    price: 1599.0,
    image: img8,
  },
];

export default function ShopContainer() {
  return (
    <div>
      {/* Image Slider */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-10">SHOP BY CATEGORY</h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={5}
            autoplay={{ delay: 2000 }}
          >
            {Categories.map((category) => (
              <SwiperSlide key={category.id}>
                <div className="mx-auto bg-white rounded-full shadow-md w-40 h-40 flex item-center justify-center overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300">
                  <div className=" flex flex-col items-center text-center">
                    <div>
                      <img
                        src={category.image}
                        alt={category.name}
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 duration-300 items-center justify-center">
                      <div className="text-white text-lg text-center py-10 font-semibold">
                        Shop {category.name}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ml-12">
                  <h3 className="font-semibold mt-4">{category.name}</h3>
                  <p className="text-gray-500 text-sm">
                    {category.product} Products
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* 3 Image Container */}
      <div className="px-6  py-10 min-h-screen space-y-7">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative flex flex-col justify-between space-y-6">
            <div>
              <img
                src={lamp}
                alt="Lamp"
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute top-6 space-y-3 text-black p-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
                  Up To 40% Off <br /> Top Lamp Brands
                </h2>
                <div>
                  <a
                    href="#"
                    className="underline font-medium text-sm text-gray-800 hover:text-blue-800 transition"
                  >
                    SHOP NOW
                  </a>
                </div>
              </div>
            </div>

            <div
              className="relative w-full buttom-1 h-[300px] bg-cover bg-center p-8 flex flex-col text-black"
              style={{ backgroundImage: `url(${banner})` }}
            >
              <div className=" p-4 ">
                <span className="text-xs sm:text-sm">NEW PRODUCTS</span>
                <h2 className="text-4xl max-sm:text-2xl font-bold mt-2 mb-3">
                  Up To 25% Off Cabinets
                </h2>
                <a
                  href="#"
                  className="underline font-medium text-sm text-gray-800 hover:text-blue-800 transition"
                >
                  SHOP NOW
                </a>
              </div>
            </div>
          </div>

          <div
            className="relative max-sm:h-[400px] md:h-[650px] bg-cover bg-center flex justify-center"
            style={{ backgroundImage: `url(${stool})` }}
          >
            <div className="text-center text-white space-y-8 p-6">
              <span className="text-sm sm:text-lg font-semibold">BIG SALE</span>
              <h2 className="text-3xl sm:text-5xl font-bold">
                Up to 70% Off <br /> Furniture & Decor
              </h2>
              <div>
                <a
                  href="#"
                  className="underline font-medium text-xl sm:text-md text-white hover:text-blue-300 transition"
                >
                  SHOP NOW
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-pink-200 flex flex-col sm:flex-row  items-center p-10 sm:p-16 gap-5 text-center sm:text-left">
          <span className="text-5xl sm:text-7xl font-bold text-black">10%</span>
          <div>
            <span className="block text-2xl sm:text-3xl font-normal">
              Get More Pay Less
            </span>
            <div className="text-lg text-black">
              On orders $500 + Use Coupon Code:
              <span className="font-bold text-black">WSD10</span>
            </div>
          </div>
        </div>
      </div>

      {/* See All Products */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-8">
            <h2 className="text-6xl max-sm:4xl  font-sans mt-10">
              Best <br />
              Morden <br />
              Furniture
            </h2>
            <button className="text-xl hover:underline hover:text-red-600 hover:text-lg">
              See All--
            </button>
          </div>
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white relative shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-full h-85 relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-85 object-cover object-center"
                />

                <button
                  className="absolute top-3 right-3 max-sm:top-72 rounded-full p-2 hover:bg-red-600  hover:text-white  overflow-hidden transition-all duration-300"
                >
                  <FaRegHeart className="font-extralight text-2xl" />
                </button>
              </div>

              <div className="flex-1 p-5 flex flex-col justify-between">
                <h3 className="font-semibold text-md mb-2 text-gray-800">
                  {item.name}
                </h3>
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
}
