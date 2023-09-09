import React, { useContext, useState } from "react";
import { BoardContext } from "../../context/boardContex";

const BoardCreatingForm = () => {
  const [input, setInput] = useState("");
  const { dispatchBoardAction } = useContext(BoardContext);
  const handleOnsubmit = (e) => {
    e.preventDefault();
    console.log(input);
    if (!input) {
      return alert("Please Provide a valid board title");
      setInput("");
    }
    dispatchBoardAction({ type: "CREATE_BOARD", payload: input });
    setInput("");
  };
  return (
    <div className=" text-center pt-10">
      <h2 className="tracking-wider font-extrabold text-[30px]  md:text-[58px] ml-2  bg-gradient-to-r animate-text from-red-100 via-purple-400 to-orange-500 bg-clip-text text-transparent">
        Make your own Work Hub
      </h2>
      <form onSubmit={handleOnsubmit}>
        <input
          className="h-12 px-2 md:w-96 w-80  mt-6 rounded-md bg-slate-100 border-[2px] border-orange-500"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          className="flex-1 md:ml-1 px-3 py-2 text-[15px] mt-8 font-semibold border-2 hover:text-black hover:bg-slate-200 duration-500 text-white border-blue-400 bg-slate-800 rounded-md "
          onClick={(e) => handleOnsubmit(e)}
        >
          Create Board
        </button>
      </form>
    </div>
  );
};

export default BoardCreatingForm;
