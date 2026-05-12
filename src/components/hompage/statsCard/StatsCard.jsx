import { FriendContext } from "@/context/FriendContext";
import React, { useContext } from "react";

const StatsCard = async () => {
  //  const res = await fetch("http://localhost:3000/friends.json");
  //   const data = await res.json();
  const data = [
    {
      id: 2,
      name: "Sarah Ahmed",
      picture: "https://randomuser.me/api/portraits/women/44.jpg",
      email: "sarah.ahmed@example.com",
      days_since_contact: 5,
      status: "Upcoming",
      tags: ["Work", "Designer"],
      bio: "Colleague from my first job. Always shares creative ideas.",
      goal: 10,
      next_due_date: "2025-07-15",
    },
  ];

  const total = data.length;
  const overdue = data.filter((f) => f.status === "Overdue").length;
  const upcoming = data.filter((f) => f.status === "Upcoming").length;
  const ok = data.filter((f) => f.status === "Ok").length;

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6 text-center">
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
