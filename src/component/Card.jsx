import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "@/config/reducers/cartslice";

const Card = ({ title, description, image, id, price }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ title, description, image, id, price }));
    alert(`${title} has been added to your cart!`);
  };

  return (
    <div className="card w-96 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 cursor-pointer">
      {/* Centered Image */}
      <div className="flex justify-center items-center h-64 bg-gray-100">
        <img
          src={image}
          alt="Product"
          className="max-h-full object-contain transition-transform duration-300 transform hover:scale-110"
        />
      </div>

      <div className="card-body p-6">
        <h2 className="card-title text-[22px] font-semibold text-[#2d3a4b] uppercase">
          {title}
        </h2>
        <p className="text-gray-600 text-[14px] pt-2">{description}</p>

        <div className="card-actions mt-6 flex justify-between gap-0">
          <button
            className="btn btn-primary px-6 py-2 rounded-md cursor-pointer text-[#2d3a4b] border-[1px] border-[#2d3a4b] hover:bg-[#2d3a4b] hover:text-[#ffff] transition-all duration-300"
            onClick={() => navigate(`/product/${id}`)}
          >
            Details
          </button>
          <button
            onClick={handleAddToCart}
            className="btn btn-primary px-6 py-2 rounded-md cursor-pointer bg-[#2d3a4b]  hover:text-[#2d3a4b] border-[1px] border-[#2d3a4b] hover:bg-[#fff] text-[#ffff] transition-all duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
