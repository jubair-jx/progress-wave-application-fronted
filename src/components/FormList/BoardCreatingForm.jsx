import React, { useContext, useState } from "react";
import { BoardContext } from "../../context/boardContex";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";

const currentDate = new Date(); // Create a new Date object with the current date and time

// Extract date components
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Adding 1 to month and zero-padding
const day = String(currentDate.getDate()).padStart(2, "0"); // Zero-padding

// Construct the formatted date and time string
const formattedDateTime = `${year}-${month}-${day} `;

const BoardCreatingForm = () => {
  const { user } = useContext(AuthContext);
  const [input, setInput] = useState("");
  const { boards, dispatchBoardAction } = useContext(BoardContext);

  const handleOnsubmit = (e) => {
    e.preventDefault();

    if (!input) {
      return alert("Please Provide a valid board title");
      setInput("");
    }
    dispatchBoardAction({ type: "CREATE_BOARD", payload: input });
    const boardData = {
      userMail: user.email,
      title: input,
      date: formattedDateTime,
    };
    fetch("http://localhost:4000/boards", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(boardData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Board Added...",
            text: "Your Board is Added Bruhh...",
          });
        }
      });

    setInput("");
  };
  return (
    <div className=" text-center pt-10">
      <h2 className="tracking-wider font-extrabold text-[30px]  md:text-[56px] ml-2  bg-gradient-to-r animate-text from-red-100 via-purple-400 to-orange-500 bg-clip-text text-transparent">
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
