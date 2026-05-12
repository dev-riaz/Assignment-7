import React, { useContext } from "react";
import Card from "./Card";

const Friends = async () => {
  // const res = await fetch("http://localhost:3000/friends.json");
  // const friendsData = await res.json();
  const friendsData = [
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

  return (
    <div className="md:w-8/12 mx-auto mt-4">
      <h1 className="text-[#1F2937] text-2xl font-bold">Your Friends</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-8 px-4 pb-20">
        {friendsData.map((friend, id) => (
          <Card key={id} friend={friend}></Card>
        ))}
      </div>
    </div>
  );
};

export default Friends;
