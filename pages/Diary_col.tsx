import React from 'react'
import Script from 'next/script'
function Diary_col() {
  return (
    <>
    <section className="Diary_collection flex justify-center items-center my-14">
  
        <div className=" w-[80%] container block">
        <div className=" heading md:flex justify-between block text-center ">
            <div className="title text-2xl font-bold">World Best vintage Dairy Collection</div>
            <div className="Collection_No flex space-x-2 justify-center ">
                <h1 className='Art_Collection_Num'>50</h1>
                <p> Collection in this Art row</p>
                
            </div>
            
          
        </div>
        <hr/>
        <div className="sign text-center text-xl font-bold my-10 "><p>More👉.....</p></div>
        <div className="Art_Cards my-14 flex justify-center items-center space-x-5 ">
          <div className="previous w-[6.5rem] h-10 rounded-full bg-slate-500 hidden md:flex justify-center items-center  font-bold text-3xl text-white"><h1>←</h1></div>
        
            <div className="row_container  overflow-x-scroll   flex space-x-4 ">
                <div className="list">
                <div className="container  rounded-[10px] hover:bg-slate-200 duration-500 ease-in-out cursor-pointer ">
                <div className="img h-[70%]">
                  <img
                    className="hover:-translate-y-10 duration-500 ease-in-out"
                    src="product-2.png"
                    alt=""
                  />
                </div>
                <div className="info h-[30%]">
                  <div className="title flex justify-center items-center">
                    <h1 className="font-bold text-lg">head</h1>
                  </div>
                  <div className="priceTag flex justify-center items-center">
                    <div className="currencyLogo font-bold">$</div>
                    <div className="price font-bold">500</div>
                  </div>
                  <div className="Buy-btn flex justify-center items-center ">
            <button className="cart rounded-lg bg-blue-700 w-[80%] font-bold text-white h-10 hover:scale-110 duration-500 ease-in-out">Buy</button>
          </div>
                </div>
              </div>
                </div>
                {/* list-2 */}
                <div className="list">
                <div className="container  rounded-[10px] hover:bg-slate-200 duration-500 ease-in-out cursor-pointer ">
                <div className="img h-[70%]">
                  <img
                    className="hover:-translate-y-10 duration-500 ease-in-out"
                    src="product-2.png"
                    alt=""
                  />
                </div>
                <div className="info h-[30%]">
                  <div className="title flex justify-center items-center">
                    <h1 className="font-bold text-lg">head</h1>
                  </div>
                  <div className="priceTag flex justify-center items-center">
                    <div className="currencyLogo font-bold">$</div>
                    <div className="price font-bold">500</div>
                  </div>
                  <div className="Buy-btn flex justify-center items-center ">
            <button className="cart rounded-lg bg-blue-700 w-[80%] font-bold text-white h-10 hover:scale-110 duration-500 ease-in-out">Buy</button>
          </div>
                </div>
              </div>
                </div>
                {/* list-3 */}
                <div className="list">
                <div className="container  rounded-[10px] hover:bg-slate-200 duration-500 ease-in-out cursor-pointer ">
                <div className="img h-[70%]">
                  <img
                    className="hover:-translate-y-10 duration-500 ease-in-out"
                    src="product-2.png"
                    alt=""
                  />
                </div>
                <div className="info h-[30%]">
                  <div className="title flex justify-center items-center">
                    <h1 className="font-bold text-lg">head</h1>
                  </div>
                  <div className="priceTag flex justify-center items-center">
                    <div className="currencyLogo font-bold">$</div>
                    <div className="price font-bold">500</div>
                  </div>
                  <div className="Buy-btn flex justify-center items-center ">
            <button className="cart rounded-lg bg-blue-700 w-[80%] font-bold text-white h-10 hover:scale-110 duration-500 ease-in-out">Buy</button>
          </div>
                </div>
              </div>
                </div>
                {/* list-4 */}
                <div className="list">
                <div className="container  rounded-[10px] hover:bg-slate-200 duration-500 ease-in-out cursor-pointer ">
                <div className="img h-[70%]">
                  <img
                    className="hover:-translate-y-10 duration-500 ease-in-out"
                    src="product-2.png"
                    alt=""
                  />
                </div>
                <div className="info h-[30%]">
                  <div className="title flex justify-center items-center">
                    <h1 className="font-bold text-lg">head</h1>
                  </div>
                  <div className="priceTag flex justify-center items-center">
                    <div className="currencyLogo font-bold">$</div>
                    <div className="price font-bold">500</div>
                  </div>
                  <div className="Buy-btn flex justify-center items-center ">
            <button className="cart rounded-lg bg-blue-700 w-[80%] font-bold text-white h-10 hover:scale-110 duration-500 ease-in-out">Buy</button>
          </div>
                </div>
              </div>
                </div>
                {/* list-5 */}
                <div className="list">
                <div className="container  rounded-[10px] hover:bg-slate-200 duration-500 ease-in-out cursor-pointer ">
                <div className="img h-[70%]">
                  <img
                    className="hover:-translate-y-10 duration-500 ease-in-out"
                    src="product-2.png"
                    alt=""
                  />
                </div>
                <div className="info h-[30%]">
                  <div className="title flex justify-center items-center">
                    <h1 className="font-bold text-lg">head</h1>
                  </div>
                  <div className="priceTag flex justify-center items-center">
                    <div className="currencyLogo font-bold">$</div>
                    <div className="price font-bold">500</div>
                  </div>
                  <div className="Buy-btn flex justify-center items-center ">
            <button className="cart rounded-lg bg-blue-700 w-[80%] font-bold text-white h-10 hover:scale-110 duration-500 ease-in-out">Buy</button>
          </div>
                </div>
              </div>
                </div>
                </div>
                {/* next */}
                <div className="next hidden  w-[6.5rem] h-10 rounded-full bg-slate-500 md:flex justify-center items-center  font-bold text-3xl text-white">
                  <h1>→</h1>
                </div>
           
        </div>
        </div>
  
   
    </section>
    <Script src="./script/main.js"></Script>
    </>
  )
}

export default Diary_col