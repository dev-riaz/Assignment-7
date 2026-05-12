"use client";
import React, { useContext, useState } from "react";
import image1 from "../../assets/text.png";
import image2 from "../../assets/call.png";
import image3 from "../../assets/video.png";
import Image from "next/image";
import { FriendContext } from "@/context/FriendContext";
import { MdOutlineInbox } from "react-icons/md";

const TimeLinePage = () => {
  const [friendsData] = useContext(FriendContext);

  const [sortType, setSortType] = useState("");
  const [filterType, setFilterType] = useState("");

  // Filter
  const filteredFriends = friendsData.filter((friend) => {
    if (filterType === "") {
      return true;
    }
    return friend.action === filterType;
  });

  // Sorting
  const sortedFriends = [...filteredFriends].sort((a, b) => {
    if (sortType === "newest") {
      return new Date(b.date) - new Date(a.date);
    }

    if (sortType === "oldest") {
      return new Date(a.date) - new Date(b.date);
    }

    return 0;
  });

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      <div className="w-11/12 md:w-8/12 mx-auto py-7">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-[#1F2937]">Timeline</h1>

          {/* Filter */}
          <div className="flex flex-col justify-start md:justify-between">
            <div className="flex">
              {/* Filter Tabs */}
              <div className="flex gap-3">
                <button
                  onClick={() => setFilterType("")}
                  className={`px-4 py-2 rounded-lg border transition ${
                    filterType === ""
                      ? "bg-[#244D3F] text-white"
                      : "bg-white text-gray-700"
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setFilterType("Call")}
                  className={`px-4 py-2 rounded-lg border transition ${
                    filterType === "Call"
                      ? "bg-[#244D3F] text-white"
                      : "bg-white text-gray-700"
                  }`}
                >
                  Call
                </button>
                <button
                  onClick={() => setFilterType("Text")}
                  className={`px-4 py-2 rounded-lg border transition ${
                    filterType === "Text"
                      ? "bg-[#244D3F] text-white"
                      : "bg-white text-gray-700"
                  }`}
                >
                  Text
                </button>
                <button
                  onClick={() => setFilterType("Video")}
                  className={`px-4 py-2 rounded-lg border transition ${
                    filterType === "Video"
                      ? "bg-[#244D3F] text-white"
                      : "bg-white text-gray-700"
                  }`}
                >
                  Video
                </button>
              </div>
            </div>
          </div>
          {/* Sort */}
          <select
            className="border border-gray-300 px-4 py-2 rounded-lg bg-white outline-none"
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>

        {/* Empty State */}
        {sortedFriends.length === 0 ? (
          <div className="my-8">
            <div className="h-[350px] flex flex-col items-center justify-center text-center bg-white border border-gray-400/40">
              <div className="text-6xl my-8">
                {" "}
                <MdOutlineInbox />
              </div>

              <h2 className="text-2xl font-bold text-gray-700">
                No Data Found
              </h2>

              <p className="text-gray-500 mt-2 max-w-sm">
                You have not added any timeline activities yet.
              </p>

              <button className="mt-6 px-6 py-2 rounded-xl bg-[#244D3F] text-white hover:scale-105 transition mb-5">
                Create Now
              </button>
            </div>
          </div>
        ) : (
          // Timeline Cards
          sortedFriends.map((friend, id) => (
            <div
              key={id}
              className="bg-white p-4 shadow-sm border border-gray-300/40 rounded-xl my-4 flex gap-4 items-center"
            >
              <Image
                width={30}
                height={30}
                alt="icons"
                src={
                  friend.action === "Call"
                    ? image2
                    : friend.action === "Text"
                      ? image1
                      : friend.action === "Video"
                        ? image3
                        : image1
                }
              />

              <div>
                <h1 className="text-lg">
                  <span className="font-bold mr-2">{friend.action}</span>

                  <span className="text-gray-500">with {friend.name}</span>
                </h1>

                <p className="text-gray-400 text-[12px]">
                  {new Date(friend.date).toLocaleString("en-US", {
                    dateStyle: "medium",
                    timeStyle: "short",
                  })}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TimeLinePage;
