import React from "react";
import BoardCreatingForm from "../FormList/BoardCreatingForm";
import Board from "../../pages/Board";

const Banner = () => {
  return (
    <>
      <section className="w-full   bg-gradient-to-r from-[#1d0523]  to-cyan-950">
        <Board />
        <div className="h-60 w-60 -top-16 bg-[#d03e677a] mx-auto blur-[70px] relative md:right-[460px]"></div>
        <div className="h-28 w-[420px] md:block sm:hidden hidden bg-[#bc37d19c] mx-auto blur-[90px] relative top-0"></div>
      </section>
    </>
  );
};
export default Banner;
