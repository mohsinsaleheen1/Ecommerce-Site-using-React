import Card from "@/component/Card";
import useFetch from "@/Hooks/usefetch";
import React from "react";

const Products = () => {
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
      <div className="py-[150px] flex justify-center items-center bg-gray-200">
        <h1 className="text-5xl font-extrabold text-[#2d3a4b]">PRODUCTS</h1>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-10 py-20">
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
    </>
  );
};

export default Products;
