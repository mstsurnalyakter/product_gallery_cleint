import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";

import banner1 from "../../public/banner/banner1.jpg";
import banner2 from "../../public/banner/banner2.jpg";
import banner3 from "../../public/banner/banner3.jpg";
import banner4 from "../../public/banner/banner4.jpg";
import banner5 from "../../public/banner/banner5.jpg";
import banner6 from "../../public/banner/banner6.jpg";
import banner7 from "../../public/banner/banner7.jpg";
import banner8 from "../../public/banner/banner8.jpg";
import banner9 from "../../public/banner/banner9.jpg";

const Banner = () => {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 3000,
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Navigation, Pagination]}
        loop={true}
      >
        <SwiperSlide>
          <div
            className="min-h-[500px]   bg-center  bg-cover  object-cover flex flex-col items-center justify-center"
            style={{
              backgroundImage: `url(${banner1})`,
            }}
          >
            <div className="bg-gradient-to-r from-[#07BE65] to-[rgba(21, 21, 21, 0.00)] py-6">
              <h1 className="md:text-4xl  text-3xl w-5/6 text-center font-extrabold ">
                Jewelry & Watches
              </h1>
              <p className="text-lg mt-3 font-medium w-5/6 mx-auto  text-center">
                Discover our selection of fine jewelry and stylish watches for
                every occasion.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="min-h-[500px]   bg-center  bg-cover flex-col object-cover flex items-center justify-center"
            style={{
              backgroundImage: `url(${banner2})`,
            }}
          >
            <div className="bg-gradient-to-r from-[#07BE65] to-[rgba(21, 21, 21, 0.00)] py-6">
              <h1 className="md:text-4xl  text-3xl w-5/6 text-center font-extrabold">
                Beauty & Health
              </h1>
              <p className="text-lg font-medium mt-6 w-5/6 mx-auto text-center">
                Explore a wide range of beauty and health products, including
                skincare, makeup, and wellness essentials.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="min-h-[500px]   bg-center flex-col  bg-cover  object-cover flex items-center justify-center"
            style={{
              backgroundImage: `url(${banner3})`,
            }}
          >
            <div className="bg-gradient-to-r from-[#07BE65] to-[rgba(21, 21, 21, 0.00)] py-6">
              <h1 className="md:text-4xl  text-3xl w-5/6 text-center font-extrabold">
                Sports & Entertainment
              </h1>
              <p className="text-lg font-medium mt-6 w-5/6 mx-auto text-center">
                Find the best gear and accessories for sports, fitness, and
                entertainment activities.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="min-h-[500px] flex-col   bg-center  bg-cover  object-cover flex items-center justify-center"
            style={{
              backgroundImage: `url(${banner4})`,
            }}
          >
            <div className="bg-gradient-to-r from-[#07BE65] to-[rgba(21, 21, 21, 0.00)] py-6">
              <h1 className="md:text-4xl  text-3xl w-5/6 text-center font-extrabold">
                Electronics
              </h1>
              <p className="text-lg font-medium mt-6 w-5/6 mx-auto text-center">
                Browse through the latest electronic gadgets, devices, and home
                appliances.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="min-h-[500px] flex-col  bg-center  bg-cover  object-cover flex items-center justify-center"
            style={{
              backgroundImage: `url(${banner5})`,
            }}
          >
            <div className="bg-gradient-to-r from-[#07BE65] to-[rgba(21, 21, 21, 0.00)] py-6">
              <h1 className="md:text-4xl  text-3xl w-5/6 text-center font-extrabold">
                Men's Clothing
              </h1>
              <p className="text-lg font-medium mt-6 w-5/6 mx-auto text-center">
                Shop for trendy and comfortable men's clothing, from casual wear
                to formal attire.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="min-h-[500px] flex-col  bg-center  bg-cover  object-cover flex items-center justify-center"
            style={{
              backgroundImage: `url(${banner6})`,
            }}
          >
            <div className="bg-gradient-to-r from-[#07BE65] to-[rgba(21, 21, 21, 0.00)] py-6">
              <h1 className="md:text-4xl  text-3xl w-5/6 text-center font-extrabold">
                Women's Clothing
              </h1>
              <p className="text-lg font-medium mt-6 w-5/6 mx-auto text-center">
                Explore our collection of stylish and chic women's clothing for
                all occasions.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="min-h-[500px] flex-col  bg-center  bg-cover  object-cover flex items-center justify-center"
            style={{
              backgroundImage: `url(${banner7})`,
            }}
          >
            <div className="bg-gradient-to-r from-[#07BE65] to-[rgba(21, 21, 21, 0.00)] py-6">
              <h1 className="md:text-4xl  text-3xl w-5/6 text-center font-extrabold">
                Toys & Games
              </h1>
              <p className="text-lg font-medium mt-6 w-5/6 mx-auto text-center">
                Find a variety of fun and educational toys and games for
                children of all ages.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="min-h-[500px] flex-col  bg-center  bg-cover  object-cover flex items-center justify-center"
            style={{
              backgroundImage: `url(${banner8})`,
            }}
          >
            <div className="bg-gradient-to-r from-[#07BE65] to-[rgba(21, 21, 21, 0.00)] py-6">
              <h1 className="md:text-4xl  text-3xl w-5/6 text-center font-extrabold">
                Security & Protection
              </h1>
              <p className="text-lg font-medium mt-6 w-5/6 mx-auto text-center">
                Secure your home and property with our range of security and
                protection products.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="min-h-[500px] flex-col  bg-center  bg-cover  object-cover flex items-center justify-center"
            style={{
              backgroundImage: `url(${banner9})`,
            }}
          >
            <div className="bg-gradient-to-r from-[#07BE65] to-[rgba(21, 21, 21, 0.00)] py-6">
              <h1 className="md:text-4xl  text-3xl w-5/6 text-center font-extrabold">
                Furniture
              </h1>
              <p className="text-lg font-medium mt-6 w-5/6 mx-auto text-center">
                Furnish your home with our selection of stylish and comfortable
                furniture pieces.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

Banner.propTypes = {};

export default Banner;
