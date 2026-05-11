import React, { useContext } from "react";
import Card from "./Card";
import { FriendContext } from "@/context/FriendContext";


const Friends = async () => {
  const res = await fetch("http://localhost:3000/friends.json");
  const friendsData = await res.json();
  //   console.log(friendsData);

  return (
    <div className="w-4xl mx-auto mt-4">
      <h1 className="text-[#1F2937] text-2xl font-bold">Your Friends</h1>
      <div className="grid grid-cols-4 gap-4 my-4 mb-">
        {friendsData.map((friend, id) => (
          <Card key={id} friend={friend}></Card>
        ))}
      </div>
    </div>
  );
};

export default Friends;
