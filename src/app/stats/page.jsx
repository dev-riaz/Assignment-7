"use client";
import { FriendContext } from "@/context/FriendContext";
import React, { useContext } from "react";
import { MdOutlineInbox } from "react-icons/md";
import { Pie, PieChart, Tooltip, ResponsiveContainer, Legend } from "recharts";

// export default function TwoLevelPieChar({
//   isAnimationActive,
//   defaultIndex,
// }: {
//   isAnimationActive?: boolean;
//   defaultIndex?: TooltipIndex;
// })

const StatsPage = () => {
  const [friendsData] = useContext(FriendContext);

  const call = friendsData.filter((f) => f.action === "Call").length;
  const text = friendsData.filter((f) => f.action === "Text").length;
  const video = friendsData.filter((f) => f.action === "Video").length;

  const data01 = [
    { name: "Call", value: call },
    { name: "Text", value: text },
    { name: "Video", value: video },
  ];

  const data02 = [
    { name: "Call", value: call },
    { name: "Text", value: text },
    { name: "Video", value: video },
  ];

  return (
    <div className="bg-[#F8FAFC]">
      <div className="w-4xl mx-auto p-10">
        <h1 className="text-3xl font-bold">Friendship Analytics</h1>

        <div className="bg-white border border-gray-400/25 mt-4 p-4">
          <p className="font-bold text-gray-500">By Interaction Type</p>
          <div className="flex justify-center items-center ">
            {friendsData.length === 0 ? (
              <div className="">
                <div className="flex flex-col items-center justify-center py-24 text-center">
                  <div className="text-6xl mb-4">
                    {" "}
                    <MdOutlineInbox />
                  </div>

                  <h2 className="text-2xl font-bold text-gray-700">
                    No Data Found
                  </h2>

                  <p className="text-gray-500 mt-2 max-w-sm">
                    You have not added any timeline activities yet.
                  </p>

                  <button className="mt-6 px-6 py-2 rounded-xl bg-[#244D3F] text-white hover:scale-105 transition">
                    Create Now
                  </button>
                </div>
              </div>
            ) : (
              <PieChart
                style={{
                  width: "100%",
                  height: "100%",
                  maxWidth: "500px",
                  maxHeight: "80vh",
                  aspectRatio: 1,
                }}
                responsive
              >
                <Pie
                  data={data01}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  outerRadius="50%"
                  fill="#8884d8"
                  isAnimationActive={true}
                />
                <Pie
                  data={data02}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  innerRadius="60%"
                  outerRadius="80%"
                  fill="#82ca9d"
                  label
                  isAnimationActive={true}
                />
                <Tooltip />
                <Legend></Legend>
              </PieChart>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
