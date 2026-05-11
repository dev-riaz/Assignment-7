import React from "react";
import { ClipLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="bg-[#F8FAFC] py-60 flex justify-center items-center">
      <ClipLoader color="green" size={40} />
    </div>
  );
};

export default Loading;
