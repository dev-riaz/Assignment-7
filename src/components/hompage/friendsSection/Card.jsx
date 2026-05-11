import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ friend }) => {
//   console.log(friend);

  return (
    <Link href={`/${friend.id}`} className="card bg-base-100 shadow-sm p-4 transition-all duration-400 hover:-translate-y-2 hover:shadow-xl hover:cursor-pointer">
      <div className="flex justify-center">
        <Image
          className="rounded-full object-cover"
          src={friend.picture}
          height={60}
          width={60}
          alt="image"
        ></Image>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2 className="card-title text-[#1F2937] font-semibold">{friend.name}</h2>
        <p className="text-[12px] text-gray-400">{friend.days_since_contact} Days ago</p>
        <div className="space-x-2">
          {friend.tags.map((item, id) => (
            <span className="badge badge-xs bg-green-500/30" key={id}>{item}</span>
          ))}
        </div>
        <div className={`badge badge-sm text-white mt-3 ${friend.status==="Overdue"?"bg-red-500/80 ":friend.status==="Upcoming"?"bg-[#244D3F]":friend.status==="Ok"?"bg-yellow-300":""}`}>{friend.status}</div>
      </div>
    </Link>
  );
};

export default Card;
