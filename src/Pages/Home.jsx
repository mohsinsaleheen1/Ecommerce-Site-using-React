import Carousel from "@/component/Carousel";
import React from "react";
import Card from "@/component/Card";
import useFetch from "@/Hooks/usefetch";

const Home = () => {
  const [loading, error, data] = useFetch(
    "https://dummyjson.com/products/category/mobile-accessories"
  );

  if (loading) {
    return (
      <div className=" flex justify-center h-[80vh] items-center text-3xl font-bold">
        <span className="loading loading-spinner text-primary"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className=" flex justify-center h-[80vh] items-center text-3xl font-bold">
        <h1 className="text-red-300">Error occured</h1>
      </div>
    );
  }
  return (
    <>
      <div className="pt-[45px] bg-gray-200">
        <Carousel />
      </div>
      <div className="py-5">
        <h1 className="text-[40px] py-10 text-center font-semibold text-[#2d3a4b]">
          ALL PRODUCTS
        </h1>
        <div className="flex justify-center items-center flex-wrap gap-10 pb-20">
          {data.products.map((item) => {
            return (
              <Card
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                image={item.thumbnail}
                price={item.price}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
