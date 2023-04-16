import React from "react";
// import Swiper core and required modules
import Script from "next/script";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCoverflow,
  EffectCube,
  EffectCards,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
function Home() {
  return (
    <>
     <section className="home  bg-slate-600">
        <div className="slider flex flex-col-reverse md:flex-row h-auto  ">
          <div  className="left flex w-[100%] flex-col justify-center text-center md:text-left md:mx-20 md:w-[50%]">
            <div className="content  md:mx-10 my-10">
          
              <div className="head text-white font-bold md:text-5xl text-2xl">
              <h1>Modern Interior</h1>
              <h1> Design Studio</h1>
              </div>
             <div className="catch-line">
             <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
            </div>
            </div>
<div className="btn-container flex justify-center items-center md:block">
<div className="btn w-44 md:w-[60%] md:mx-10 grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 text-3xl gap-5 ">
            <button className="Shop h-[4rem] w-44 bg-yellow-600  rounded-[35px]">Shop</button>
            <button className="Explore h-[4rem] w-44 rounded-[35px] text-white border-white border-[2px]">Explore</button>
          </div>
</div>
         
          </div>
          <div className="right  md:block md:my-10 ">
            {/* imageSlider */}
            <Swiper
            
              modules={[
                Navigation,
                Pagination,
                Scrollbar,
                A11y,
                Autoplay,
                EffectCube,
                EffectCards,
              ]}
              slidesPerView={1}
              autoplay={{ delay: 1000 }}
              pagination={{ clickable: true }}
            >
              <SwiperSlide>
                <img className="slideImg" src="product-2.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="slideImg" src="product-2.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="slideImg" src="product-3.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="slideImg" src="sofa.png" alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
          <path className="border-hidden"
            fill="#fff"
            fillOpacity="1"
            d="M0,96L48,101.3C96,107,192,117,288,154.7C384,192,480,256,576,266.7C672,277,768,235,864,218.7C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </section>
    </>
  );
}

export default Home;
