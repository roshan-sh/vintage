import React from "react";

function Contact() {
  return (
    <>
     <section className="contact space-y-10 bg-slate-100  mb-10">
        <div className="heading flex justify-center items-center font-bold text-4xl text-slate-700 ">
            <h1 className="my-14">Contact Us</h1>
        </div>
        <div className="contact_container  flex justify-center items-center ">
        <div className="container md:w-[60%] w-[90%] text-sm ">
          <div className="row grid md:grid-cols-3 grid-rows-3 gap-4">
            <div className="location flex space-x-4">
              <div className="logo bg-green-700 md:w-[20%] w-[15%] flex justify-center items-center rounded-[8px]">
              </div>
              <div className="content flex  w-[85%] md:w-[80%]">
              <p>43 Raymouth Rd. Baltemoer, London 3910</p> 
              </div>
            </div>
            <div className="emailContact flex space-x-4">
            <div className="logo bg-green-700 md:w-[20%] w-[15%] flex justify-center items-center rounded-[8px]"></div>
             <div className="content flex w-[85%] md:w-[80%]">
             <p>info@yourdomain.com</p>
             </div>
            </div>
            <div className="Number flex space-x-4">
            <div className="logo bg-green-700 md:w-[20%] w-[15%] flex justify-center items-center rounded-[8px]"></div>
              <div className="content flex  w-[85%] md:w-[80%]">
               <p>info@yourdomain.com</p></div>
            </div>
          </div>
          <form action="submit" className="space-y-1 md:space-y-2">
            <div className="namePart grid grid-cols-2 gap-6">
                <div className="firstName">
                <label htmlFor="First Name" className="text-slate-700 md:text-xl text-sm">First Name</label>
                <div className="input border-slate-400 border-[2px] h-14  rounded-lg w-[100%] flex justify-center items-center bg-white">
                <input type="text" className="outline-none text-2xl w-[95%] h-[100%]"/>
                </div>
               
                </div>
                <div className="LastName">
                <label htmlFor="last Name" className="text-slate-700 md:text-xl text-sm">Last Name</label>
                <div className="input border-slate-400 border-[2px] h-14  rounded-lg w-[100%] flex justify-center items-center bg-white">
                <input type="text" className="outline-none text-2xl w-[95%] h-[100%]"/>
                </div>
                </div>

            </div>
           
            <div className="Email">
                <label htmlFor="Email" className="text-slate-700 md:text-xl text-sm">Email</label>
                <div className="input border-slate-400 border-[2px] h-14  rounded-lg w-[100%] flex justify-center items-center bg-white">
                <input type="text" className="outline-none text-2xl w-[95%] h-[100%]"/>
                </div>
        </div>
            <div className="Message">
                <label htmlFor="Message" className="text-slate-700 md:text-xl text-sm">Message</label>
                <div className="input border-slate-400 border-[2px] h-48  rounded-lg w-[100%] flex justify-center items-center bg-white">
                <input type="text" className="outline-none text-2xl w-[95%] h-[100%]"/>
            </div>
            </div>
            <div className="btn w-28 h-14 flex justify-center items-center bg-slate-800 font-bold text-2xl text-white rounded-md cursor-pointer">
              Send
            </div>
          </form>
        </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
