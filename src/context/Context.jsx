"use client";
import { createContext, useEffect, useState } from "react";

const FriendContext = createContext();

// const Friends = async () => {
//   const res = await fetch("http://localhost:3000/friends.json");
//   const friendsData = await res.json();
// };

const FriendProvider = ({ children }) => {
  const [friendsData, setFriendsData] = useState([]);
  
  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => setFriendsData(data));
  }, []);
console.log(friendsData);

  return (
    <FriendContext.Provider value={friendsData}>
      {children}
    </FriendContext.Provider>
  );
};

export default FriendProvider;
