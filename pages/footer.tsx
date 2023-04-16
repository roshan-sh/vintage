import React from 'react'

function Footer() {
  return (
   <>
   <section className="footer flex justify-center items-center bg-[#141d2a]">
    <div className="footer-container w-[80%] ">
        <div className="feedback flex justify-center items-center">
        <div className="feedback-area block md:flex justify-between w-[70%]  bg-purple-900 space-y-5">
            <div className="head mx-10 my-4 ">
                <h1 className='font-bold text-xl text-white'>Issue regarding Quality and Price</h1>
                <p className='text-slate-400'>Let us know to improve!</p>
            </div>
         <button className='btn w-32 h-12 bg-slate-700 md:mr-10 md:my-6 ml-[20%]  text-white'>Contact Us</button>
        </div>
        </div>
    <div className=" my-10 footer_container grid grid-cols-2 gap-10 md:grid-cols-5">
        <div className="col-1 space-y-2 block">
            <div className="logo"><img src="" alt="" /></div>
            <p className='text-slate-400'>@2023</p>
        </div>
        <div className="col-2 space-y-2">
            <div className="head text-white">
                <h1>Customers</h1>
            </div>
            <ul className=' space-y-2'><li className='text-slate-400'>Buyer</li>
            <li className='text-slate-400'>Supplier</li></ul>
            
        </div>
        <div className="col-3 space-y-2">
        <div className="head text-white">
            <h1>Company</h1>
        </div>
        <ul className=' space-y-2'><li className='text-slate-400'>About us</li>
        <li className='text-slate-400'>Products</li>
        <li className='text-slate-400'>Contacts</li></ul>
        </div>
        <div className="col-4 space-y-2">
            <div className="head text-white">
                <h1>Further Information</h1>
            </div>
            <ul className=' space-y-2'><li className='text-slate-400'>Terms and conditions</li>
            <li className='text-slate-400'>Privacy Policy</li></ul>
        </div>
        <div className="col-5 space-y-2">
            <div className="head text-white"><h1>Follow Us</h1></div>
            <div className="site-links md:flex grid grid-cols-3 grid-row-auto md:space-x-1 gap-1 md:gap-0 ">
                <div className="footer_logo md:w-10 md:h-10 w-11 h-11 rounded-full bg-blue-500">
                    <img src="facebook.png" alt="" />
                </div>
                <div className="footer_logo md:w-10 md:h-10 w-11 h-11 rounded-full bg-blue-500">
                    <img src="instagram.png" alt="" />
                </div>
                <div className="footer_logo md:w-10 md:h-10 w-11 h-11 rounded-full bg-blue-500">
                    <img src="linkedin.png" alt="" />
                </div>
                <div className="footer_logo md:w-10 md:h-10 w-11 h-11 rounded-full bg-blue-500">
                    <img src="search.png" alt="" />
                </div>
            </div>
        </div>
    </div>
    </div>
   </section>
   </>
  )
}

export default Footer