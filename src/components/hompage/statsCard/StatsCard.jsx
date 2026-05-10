import React from "react";

const StatsCard = () => {
  return (
    <div className="">
      <div className="grid grid-cols-4 gap-3 mb-6 text-center">
        <div className="bg-white border border-gray-300/45 p-4">
          <h1 className="text-2xl font-bold text-[#244D3F]">10</h1>
          <p className="text-gray-400 font-semibold">Total Friends</p>
        </div>
        <div className="bg-white border border-gray-300/45 p-4">
          <h1 className="text-2xl font-bold text-[#244D3F]">10</h1>
          <p className="text-gray-400 font-semibold">Total Friends</p>
        </div>
        <div className="bg-white border border-gray-300/45 p-4">
          <h1 className="text-2xl font-bold text-[#244D3F]">10</h1>
          <p className="text-gray-400 font-semibold">Total Friends</p>
        </div>
        <div className="bg-white border border-gray-300/45 p-4">
          <h1 className="text-2xl font-bold text-[#244D3F]">10</h1>
          <p className="text-gray-400 font-semibold">Total Friends</p>
        </div>
      </div>
      <hr className="border border-gray-400/40" />
    </div>
  );
};

export default StatsCard;
