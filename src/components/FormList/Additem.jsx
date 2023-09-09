import React from "react";

const Additem = ({
  listAddItem,

  setEditmode,
}) => {
  return (
    <div
      onClick={() => setEditmode(true)}
      className="flex gap-2 w-[195px] mb-6 ml-4 mt-12 h-12 px-4 py-3 cursor-pointer rounded-md  bg-blue-500 text-white"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 cursor-pointer"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
      <p className="text-md text-white">
        {listAddItem ? "Make a list" : "Add a Task"}
      </p>
    </div>
  );
};

export default Additem;
