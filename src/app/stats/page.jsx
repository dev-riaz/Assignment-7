"use client";

import { FriendContext } from "@/context/FriendContext";
import React, { useContext } from "react";
import { MdOutlineInbox } from "react-icons/md";
import {
  Pie,
  PieChart,
  PieLabelRenderProps,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";

// Colors
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

// Custom Label
const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  if (cx == null || cy == null || innerRadius == null || outerRadius == null) {
    return null;
  }

  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;

  const x = Number(cx) + radius * Math.cos(-(midAngle ?? 0) * RADIAN);

  const y = Number(cy) + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > Number(cx) ? "start" : "end"}
      dominantBaseline="central"
      fontSize={12}
    >
      {`${((percent ?? 0) * 100).toFixed(0)}%`}
    </text>
  );
};

const StatsPage = () => {
  const [friendsData] = useContext(FriendContext);

  const call = friendsData.filter((f) => f.action === "Call").length;
  const text = friendsData.filter((f) => f.action === "Text").length;
  const video = friendsData.filter((f) => f.action === "Video").length;

  const data = [
    { name: "Call", value: call },
    { name: "Text", value: text },
    { name: "Video", value: video },
  ];

  return (
    <div className="bg-[#F8FAFC]">
      <div className="px-4 py-8 md:w-8/12 mx-auto">
        <h1 className="text-3xl font-bold">Friendship Analytics</h1>

        <div className="bg-white border border-gray-400/25 mt-4 p-4">
          <p className="font-bold text-gray-500">By Interaction Type</p>

          <div className="h-[350px] py-4 flex justify-center items-center">
            {friendsData.length === 0 ? (
              <div className="flex flex-col justify-center items-center ">
                <div className="text-6xl my-8">
                  <MdOutlineInbox />
                </div>

                <h2 className="text-2xl font-bold text-gray-700">
                  No Data Found
                </h2>

                <p className="text-gray-500 mt-2 max-w-sm text-[14px]">
                  You have not added any timeline activities yet.
                </p>
                <button className="mt-6 px-6 py-2 rounded-xl bg-[#244D3F] text-white hover:scale-105 transition mb-5">
                Create Now
              </button>
              </div>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    isAnimationActive={true}
                  >
                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Legend></Legend>
                </PieChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;

// "use client";
// import { FriendContext } from "@/context/FriendContext";
// import React, { useContext } from "react";
// import { MdOutlineInbox } from "react-icons/md";
// import { Pie, PieChart, Tooltip, ResponsiveContainer, Legend } from "recharts";

// const StatsPage = () => {
//   const [friendsData] = useContext(FriendContext);

//   const call = friendsData.filter((f) => f.action === "Call").length;
//   const text = friendsData.filter((f) => f.action === "Text").length;
//   const video = friendsData.filter((f) => f.action === "Video").length;

//   const data01 = [
//     { name: "Call", value: call },
//     { name: "Text", value: text },
//     { name: "Video", value: video },
//   ];

//   const data02 = [
//     { name: "Call", value: call },
//     { name: "Text", value: text },
//     { name: "Video", value: video },
//   ];

//   return (
//     <div className="bg-[#F8FAFC]">
//       <div className="px-4 py-8 md:w-8/12 mx-auto">
//         <h1 className="text-3xl font-bold">Friendship Analytics</h1>

//         <div className="bg-white border border-gray-400/25 mt-4 p-4">
//           <p className="font-bold text-gray-500">By Interaction Type</p>
//           <div className="flex justify-center items-center ">
//             {friendsData.length === 0 ? (
//               <div className="md:w-8/12 mx-auto">
//                 <div className="flex flex-col items-center justify-center text-center">
//                   <div className="text-6xl my-8">
//                     {" "}
//                     <MdOutlineInbox />
//                   </div>

//                   <h2 className="text-2xl font-bold text-gray-700">
//                     No Data Found
//                   </h2>

//                   <p className="text-gray-500 mt-2 max-w-sm">
//                     You have not added any timeline activities yet.
//                   </p>

//                   <button className="mt-6 px-6 py-2 rounded-xl bg-[#244D3F] text-white hover:scale-105 transition mb-5">
//                     Create Now
//                   </button>
//                 </div>
//               </div>
//             ) : (
//               <PieChart
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   maxWidth: "500px",
//                   maxHeight: "80vh",
//                   aspectRatio: 1,
//                 }}
//                 responsive
//               >
//                 <Pie
//                   data={data01}
//                   dataKey="value"
//                   cx="50%"
//                   cy="50%"
//                   outerRadius="50%"
//                   fill="#8884d8"
//                   isAnimationActive={true}
//                 />
//                 <Pie
//                   data={data02}
//                   dataKey="value"
//                   cx="50%"
//                   cy="50%"
//                   innerRadius="60%"
//                   outerRadius="80%"
//                   fill="#82ca9d"
//                   label
//                   isAnimationActive={true}
//                 />
//                 <Tooltip />
//                 <Legend></Legend>
//               </PieChart>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StatsPage;
