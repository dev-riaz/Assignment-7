"use client";
import React, { useEffect, useState } from "react";
import { FriendContext } from "./FriendContext";

const FriendProvider = ({ children }) => {
  const [friendsData, setFriendsData] = useState([]);

  return (
    <FriendContext.Provider value={[friendsData,setFriendsData]}>
      {children}
    </FriendContext.Provider>
  );
};

export default FriendProvider;
