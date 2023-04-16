import React from "react";

function Product() {
  return (
    <>
      <section className="Popular_product block space-y-6">
        <div className="heading text-center font-bold text-3xl underline underline-offset-1">
        <h1>Some Trending Products View</h1>
        </div>

<div className="container flex justify-center items-center">
        <div className="Popular_product_container w-[80%] my-10">
          <div className="row grid grid-cols-1 grid-rows-4 md:grid-cols-4 md:grid-rows-1">
            <div className="col">
              <div className="head font-bold text-3xl ">
                <h1>Crafted with</h1>
                <h1>excellent </h1>
                <h1> material.</h1>
              </div>
              <div className="content">
                <p>
                  {" "}
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate velit imperdiet dolor tempor
                  tristique.
                </p>
              </div>
              <div className="btn my-4 w-32 h-14 rounded-[13px] bg-blue-600 flex justify-center items-center text-2xl">
                {" "}
                Explore
              </div>
            </div>

            <div className="col">
              <div className="container  rounded-[10px] hover:bg-slate-200 duration-500 ease-in-out cursor-pointer ">
                <div className="img h-[70%]">
                  <img
                    className="hover:-translate-y-10 duration-500 ease-in-out"
                    src="product-3.png"
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
                </div>
              </div>
            </div>
            <div className="col">
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
                </div>
              </div>
            </div>
            <div className="col">
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
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Product;
