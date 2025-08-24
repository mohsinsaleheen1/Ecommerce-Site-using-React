import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../Hooks/usefetch";
import { addToCart } from "@/config/reducers/cartslice";

const handleAddToCart = () => {
  dispatch(addToCart({ title, description, image, id, price }));
};

const SingleProduct = (title, description, image, id, price) => {
  const params = useParams();
  const [loading, error, data] = useFetch(
    `https://dummyjson.com/products/${params.id}`
  );

  if (loading) {
    return (
      <div className="flex justify-center h-[80vh] items-center text-3xl font-bold">
        <span className="loading loading-spinner text-primary"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center h-[80vh] items-center text-3xl font-bold">
        <h1 className="text-red-300">Error occurred</h1>
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto px-6 pt-32 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="flex justify-center items-center">
          <img
            src={data.thumbnail}
            alt={data.title}
            className="w-full h-100 max-w-[500px] object-contain border-2 rounded-xl shadow-xl transform transition-all duration-300 hover:scale-105"
          />
        </div>

        <div className="space-y-6">
          <h1 className="text-[30px] uppercase font-semibold text-[#2d3a4b]">
            {data.title}
          </h1>

          <div className="flex items-center space-x-4">
            <span className="text-3xl font-bold text-[#fde428]">
              ${data.price}
            </span>
            <span className="text-base text-red-500 line-through">
              $
              {((data.price / (100 - data.discountPercentage)) * 100).toFixed(
                2
              )}
            </span>
            <span className="text-sm text-[#fde428]">
              -{data.discountPercentage}% Off
            </span>
          </div>

          <p className="text-gray-700 text-lg">{data.description}</p>

          <div className="text-sm text-gray-600 space-y-3">
            <p>
              <strong>Availability:</strong> {data.availabilityStatus} (
              {data.stock} left)
            </p>
            <p>
              <strong>Minimum Order Quantity:</strong> 24
            </p>
            <p>
              <strong>Shipping:</strong> Ships in 1 month
            </p>
            <p>
              <strong>Warranty:</strong> {data.warrantyInformation}
            </p>
            <p>
              <strong>Return Policy:</strong> {data.returnPolicy}
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-sm text-gray-600">
              <strong>Barcode:</strong> {data.sku}
            </p>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="w-full btn btn-primary px-6 py-2 rounded-md cursor-pointer text-[#2d3a4b] border-[1px] border-[#2d3a4b] hover:bg-[#2d3a4b] hover:text-[#ffff] transition-all duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
