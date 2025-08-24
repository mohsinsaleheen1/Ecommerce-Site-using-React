import Footer from "@/component/Footer";
import Header from "@/component/Header";
import React from "react";
import { Outlet } from "react-router-dom";

const Applayout = () => {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  );
};
export default Applayout;
