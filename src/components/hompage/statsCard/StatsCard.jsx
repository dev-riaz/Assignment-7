
import { FriendContext } from "@/context/FriendContext";
import React, { useContext } from "react";

const StatsCard = async() => {
 const res = await fetch("http://localhost:3000/friends.json");
  const data = await res.json();


  const total = data.length;
  const overdue = data.filter((f) => f.status === "Overdue").length;
  const upcoming = data.filter((f) => f.status === "Upcoming").length;
  const ok = data.filter((f) => f.status === "Ok").length;

  return (
    <div className="">
      <div className="grid grid-cols-4 gap-3 mb-6 text-center">
        <div className="bg-white border border-gray-300/45 p-4">
          <h1 className="text-2xl font-bold text-[#244D3F]">{total}</h1>
          <p className="text-gray-400 font-semibold">Total Friends</p>
        </div>
        <div className="bg-white border border-gray-300/45 p-4">
          <h1 className="text-2xl font-bold text-[#244D3F]">{overdue}</h1>
          <p className="text-gray-400 font-semibold">Total Overdue</p>
        </div>
        <div className="bg-white border border-gray-300/45 p-4">
          <h1 className="text-2xl font-bold text-[#244D3F]">{upcoming}</h1>
          <p className="text-gray-400 font-semibold">Total Upcoming</p>
        </div>
        <div className="bg-white border border-gray-300/45 p-4">
          <h1 className="text-2xl font-bold text-[#244D3F]">{ok}</h1>
          <p className="text-gray-400 font-semibold">Total Ok</p>
        </div>
      </div>
      <hr className="border border-gray-400/40" />
    </div>
  );
};

export default StatsCard;
