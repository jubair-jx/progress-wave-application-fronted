import React from "react";

const BoardItemShow = ({ data, deleteHandler }) => {
  return (
    <div>
      <h3 className="text-md hover:text-gray-900">
        <span className="font-bold">Board Name :</span>{" "}
        <span className="text-sm">{data.title}</span>
      </h3>

      <svg
        onClick={deleteHandler}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 bg-red-600 rounded-full text-gray-100"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>

      <div>
        <p className="text-black ">
          <span className="font-bold">Created Date :</span> {data.date}
        </p>
      </div>
    </div>
  );
};

export default BoardItemShow;
