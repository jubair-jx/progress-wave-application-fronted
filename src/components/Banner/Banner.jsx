import React from "react";
import BoardCreatingForm from "../FormList/BoardCreatingForm";
import Board from "../../pages/Board";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <section className="w-full   bg-gradient-to-r from-[#1d0523]  to-cyan-950">
        <div className="h-60 w-60 -top-16 bg-[#d03e677a] mx-auto blur-[70px] relative md:right-[460px]"></div>
        <div className="h-28 w-[420px] md:block sm:hidden hidden bg-[#bc37d19c] mx-auto blur-[90px] relative top-0"></div>

        <div className=" relative md:bottom-60 bottom-40 text-center">
          <h2 className="tracking-wider  font-extrabold text-[30px]  md:text-[48px] ml-2  bg-gradient-to-r animate-text from-red-100 via-purple-400 to-orange-500 bg-clip-text text-transparent">
            Wanna a build in your own WorkHub.?
          </h2>
          <p className="tracking-wider font-medium text-[12px]  md:text-[16px] ml-2  bg-gradient-to-r animate-text mb-9 from-red-100 via-purple-100 to-orange-200 bg-clip-text text-transparent">
            Then Now, here is the best solution for especially you......
          </p>
          <Link
            to={"/board"}
            className="px-3 py-3 mt-8 font-semibold border-2 hover:text-black hover:bg-slate-200 duration-500 text-white border-orange-500 bg-slate-800 rounded-md "
          >
            Make a WorkHub
          </Link>
        </div>
      </section>
    </>
  );
};
export default Banner;
