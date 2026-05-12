"use client";

import { FriendContext } from "@/context/FriendContext";
import React, { useContext } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaVideo } from "react-icons/fa";
import { MdTextsms } from "react-icons/md";
import { toast } from "react-toastify";

const HandleBtn = ({ fr }) => {
  const [friendsData, setFriendsData] = useContext(FriendContext);

  const handleClick = (type) => {
    const newFriend = {
      ...fr,
      action: type,
      date: new Date().toISOString(),
    };

    setFriendsData([...friendsData, newFriend]);
    if (type === "Call") {
      toast.success(<div className="flex items-center gap-3">
        <BiSolidPhoneCall />
        <span>Calling started...</span>
      </div>);
    } else if (type === "Text") {
      toast.info(<div className="flex items-center gap-3">
        <MdTextsms />
        <span>Message sent!</span>
      </div>);
    } else if (type === "Video") {
      toast.success(<div className="flex items-center gap-3">
        <FaVideo />
        <span>Video call started!</span>
      </div>);
    }
   
  };
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        <button
          onClick={() => handleClick("Call")}
          className="btn flex flex-row md:flex-col py-8 hover:bg-[#244D3F] hover:text-white"
        >
          <span className="text-3xl">
            <BiSolidPhoneCall />
          </span>
          <span className="font-medium">Call</span>
        </button>

        <button
          onClick={() => handleClick("Text")}
          className="btn flex flex-row md:flex-col py-8 hover:bg-[#244D3F] hover:text-white"
        >
          <span className="text-3xl">
            <MdTextsms />
          </span>
          <span className="font-medium">Text</span>
        </button>
        <button
          onClick={() => handleClick("Video")}
          className=" btn flex flex-row md:flex-col py-8 hover:bg-[#244D3F] hover:text-white"
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
