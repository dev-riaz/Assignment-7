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

  return (
    <div className="bg-[#F8FAFC]">
      <div className="w-4xl mx-auto py-7">
        <h1 className="text-3xl font-bold text-[#1F2937]">Timeline </h1>
        <div className=""></div>

        {friendsData.length === 0 ? (
          <div className="">
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <div className="text-6xl mb-4"> <MdOutlineInbox /></div>

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
          friendsData.map((friend, id) => (
            <div
              key={id}
              className="bg-white p-4 shadow-sm border border-gray-400/40 my-4 flex gap-4 items-center"
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
                        : ""
                }
              ></Image>
              <div className="">
                <h1>
                  <span className="font-bold mr-2">{friend.action}</span>
                  <span className="text-gray-400">with {friend.name}</span>
                </h1>
                <p className="text-gray-400 text-[12px]">
                  {new Date().toLocaleString("en-US", {
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
