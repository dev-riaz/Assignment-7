"use client";

import { FriendContext } from "@/context/FriendContext";
import React, { useContext } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaVideo } from "react-icons/fa";
import { MdTextsms } from "react-icons/md";

const HandleBtn = ({ fr }) => {
  const [friendsData, setFriendsData] = useContext(FriendContext);
  console.log(friendsData);
  // console.log(data);

  const handleClick = (type) => {
    const newFriend = {
      ...fr,
      action: type,
    };

    setFriendsData([...friendsData, newFriend]);
  };
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 ">
        <button
          onClick={() => handleClick("Call")}
          className="btn flex flex-col py-8 hover:bg-[#244D3F] hover:text-white"
        >
          <span className="text-3xl">
            <BiSolidPhoneCall />
          </span>
          <span className="font-medium">Call</span>
        </button>

        <button
          onClick={() => handleClick("Text")}
          className="btn flex flex-col py-8 hover:bg-[#244D3F] hover:text-white"
        >
          <span className="text-3xl">
            <MdTextsms />
          </span>
          <span className="font-medium">Text</span>
        </button>
        <button
          onClick={() => handleClick("Video")}
          className=" btn flex flex-col py-8 hover:bg-[#244D3F] hover:text-white"
        >
          <span className="text-3xl">
            <FaVideo />
          </span>
          <span className="font-medium">Video</span>
        </button>
      </div>
    </div>
  );
};

export default HandleBtn;
