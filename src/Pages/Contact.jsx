import React from "react";

const Contact = () => {
  return (
    <>
      <div className="py-[150px] flex justify-center items-center bg-gray-200">
        <h1 className="text-5xl font-extrabold text-[#2d3a4b]">Contact</h1>
      </div>
      <div className="flex justify-center py-10 px-10">
        <div className="w-[80%]">
          <form>
            <h1 className="text-2xl text-[#2d3a4b] uppercase font-bold text-center">
              Keep in Touch With Us
            </h1>
            <div className="flex gap-6 py-4 w-[100%]">
              <div className="w-[100%]">
                <label className="text-[14px] uppercase text-[#2d3a4b]">
                  Full Name*
                </label>
                <br />
                <input
                  type="text"
                  className="border-[1px] border-[#2d3a4b] py-[7px] px-0.5 w-[80%]"
                />
              </div>
              <div className="w-[100%]">
                <label className="text-[14px] uppercase text-[#2d3a4b]">
                  Email*
                </label>
                <br />
                <input
                  type="text"
                  className="border-[1px] border-[#2d3a4b] py-[7px] px-0.5 w-[80%]"
                />
              </div>
            </div>
            <div className="flex gap-6 py-4 w-[100%]">
              <div className="w-[100%]">
                <label className="text-[14px] uppercase text-[#2d3a4b]">
                  Phone*
                </label>
                <br />
                <input
                  type="text"
                  className="border-[1px] border-[#2d3a4b] py-[7px] px-0.5 w-[80%]"
                />
              </div>
              <div className="w-[100%]">
                <label className="text-[14px] uppercase text-[#2d3a4b]">
                  Subject*
                </label>
                <br />
                <input
                  type="text"
                  className="border-[1px] border-[#2d3a4b] py-[7px] px-0.5 w-[80%]"
                />
              </div>
            </div>
            <div>
              <label className="text-[14px] uppercase text-[#2d3a4b]">
                Phone*
              </label><br/>
              <textarea className="w-[91%] h-[80px] border-[#2d3a4b] border-[1px]"></textarea>
            </div>
            <button className="mt-4 bg-[#2d3a4b] text-[#ffff] cursor-pointer py-3 px-12 rounded-md hover:text-[#2d3a4b] uppercase border-[1px] hover:bg-[#ffff] border-[#2d3a4b]">Sumbit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
