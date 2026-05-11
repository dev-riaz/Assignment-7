"use client";
import React, { useEffect, useState } from "react";
import { FriendContext } from "./FriendContext";

const FriendProvider = ({ children }) => {
  const [friendsData, setFriendsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/friends.json");
      const data = await res.json();

      setFriendsData(data);
      
    };
    fetchData();
  }, []);

  return (
    <FriendContext.Provider value={friendsData}>
      {children}
    </FriendContext.Provider>
  );
};

export default FriendProvider;
