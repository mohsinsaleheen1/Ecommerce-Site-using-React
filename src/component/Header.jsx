import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import logo from "../Images/logo.png";
const Header = () => {
  return (
    <>
      <div className="px-5 py-6 bg-[#FFFF] fixed w-[100%] shadow-lg z-40">
        <nav className="flex justify-between">
          <div>
            <h1 className="text-3xl font-extrabold font-serif text-[#2d3a4b]">
              <span className="text-[#fde428]">MS</span>SHOP
            </h1>
          </div>
          <ul className="flex justify-between gap-6 items-center">
            <li>
              <Link
                to="/"
                className="text-[#2d3a4b] hover:text-[#fde428] uppercase font-semibold transition-all duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-[#2d3a4b] hover:text-[#fde428] uppercase font-semibold transition-all duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-[#2d3a4b] hover:text-[#fde428] uppercase font-semibold transition-all duration-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="text-[#2d3a4b] hover:text-[#fde428] uppercase font-semibold transition-all duration-300"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-[#2d3a4b] hover:text-[#fde428] uppercase font-semibold transition-all duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div>
            <Link to='/cart' className="border-[1px] border-[#2d3a4b] w-[40px] h-[40px] rounded-full flex justify-center items-center hover:text-[#ffff] cursor-pointer hover:bg-[#2d3a4b] transition-all duration-300">
              <FaShoppingBag />
            </Link>
            <span></span>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
