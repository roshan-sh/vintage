import React from "react";
import Script from "next/script";
import Image from "next/image";


// import 'swiper/css/EffectCube';
const navbar = () => {
  return (
    <>
      <section className="nav bg-slate-600 text-white sticky ">
       <div className="nav_container   flex  ">
        <div className="logo  w-[20%] my-1 mx-1">
          <img src="vercel.svg" alt="" className="w-10 h-10"/>
        </div>
        <div className="heading_content  w-[80%] flex justify-end  md:justify-between ">
          <div className="ul mx-3 flex items-center justify-center">
            <ul className=" hidden md:flex md:space-x-6  text-2xl">
            <li className="hover:underline hover:text-green-400 cursor-pointer">Home</li>
            <li className="hover:underline hover:text-green-400 cursor-pointer">Product</li>
            <li className="hover:underline hover:text-green-400 cursor-pointer">About</li>
            <li className="hover:underline hover:text-green-400 cursor-pointer">Contact</li>
            
            </ul>
          </div>
          <div className="others flex mr-6 space-x-2 ">
            <div className="search my-1">
              <img src="search.png" alt="" className="w-8 h-8"/>
            </div>
            <div className="cart my-1">
            <img src="cart.png" alt="" className="w-8 h-8"/>
            </div>
            <div className="toogle md:hidden">  <Image
                  src="menu.svg"
                  alt=""
                  width={40}
                  height={20}
                  className="ToggleMenu "
                /></div>
          </div>
        </div>
       </div>
      </section>
      <section className="navElem mx-4 hidden animate-wiggle ">
        <div className="ul overflow-hidden w-[100%]  md:h-0">
          <ul><li className="hover:underline hover:text-orange-400 cursor-pointer">Home</li>
            <li className="hover:underline hover:text-orange-400 cursor-pointer">Product</li>
            <li className="hover:underline hover:text-orange-400 cursor-pointer">About</li>
            <li className="hover:underline hover:text-orange-400 cursor-pointer">Contact</li></ul>
        </div>

      </section>
      <Script src="./script/main.js"></Script>
    </>
  );
};

export default navbar;
