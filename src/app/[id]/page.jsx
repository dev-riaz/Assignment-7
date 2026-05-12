import Image from "next/image";
import Link from "next/link";
import React from "react";

import { FaLongArrowAltLeft } from "react-icons/fa";
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { IoArchive } from "react-icons/io5";

import { RiDeleteBin6Line } from "react-icons/ri";
import HandleBtn from "../HandleBtn";

const Friends = async () => {
  const res = await fetch("http://localhost:3000/friends.json");
  const friendsData = await res.json();
  return friendsData;
};

const DetailsPage = async ({ params }) => {
  const { id } = await params;
  const friends = await Friends();

  const fr = friends.find((fr) => fr.id == id);

  if (!fr) {
    return (
      <div className="bg-[#F8FAFC]">
        <div className="h-screen flex justify-center items-center">
        <h1 className="text-3xl font-bold">No Data Found</h1>
      </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F8FAFC]">
      <div className=" md:w-8/12 mx-auto py-8">
        <Link href={"/"} className="btn bg-[#244D3F] text-white">
          <FaLongArrowAltLeft />
          Back To Home
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
          {/* Left Profile Card */}
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-gray-400/30 p-6 text-center shadow-sm">
              <div className="flex justify-center">
                <Image
                  height={100}
                  width={100}
                  alt="user"
                  src={fr.picture}
                  loading="eager"
                  className="rounded-full"
                ></Image>
              </div>

              <h2 className=" text-xl font-semibold text-gray-800">
                {fr.name}
              </h2>

              <div className="flex flex-col justify-center items-center gap-2">
                <div
                  className={`badge badge-sm text-white mt-3 ${fr.status === "Overdue" ? "bg-red-500/80 " : fr.status === "Upcoming" ? "bg-[#244D3F]" : fr.status === "Ok" ? "bg-yellow-300" : ""}`}
                >
                  {fr.status}
                </div>
                <div className="flex gap-1">
                  {fr.tags.map((item, index) => (
                    <div key={index} className="badge badge-sm bg-green-500/30">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-2 italic text-gray-500 text-sm">{fr.bio}</p>

              <p className="text-sm text-gray-400 mt-">{fr.email}</p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button className="btn w-full flex justify-center items-center bg-white border border-gray-400/30 py-2 font-semibold gap-2 hover:cursor-pointer">
                <HiOutlineBellSnooze className="relative top-[1px] text-xl" />{" "}
                Snooze 2 Weeks
              </button>

              <button className="btn w-full flex justify-center items-center bg-white border border-gray-400/30 py-2 font-semibold gap-2 hover:cursor-pointer">
                <IoArchive className="relative top-[1px] text-xl" /> Archive
              </button>

              <button className="btn w-full flex justify-center items-center bg-white border border-gray-400/30 py-2 font-semibold gap-2 text-red-500 hover:cursor-pointer">
                <RiDeleteBin6Line className="relative top-[1px] text-xl" />{" "}
                Delete
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-2 space-y-5">
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl border border-gray-400/30 py-4 text-center shadow-sm">
                <h1 className="text-4xl font-bold text-[#214b3e]">
                  {fr.days_since_contact}
                </h1>
                <p className="text-gray-500 mt-2">Days Since Contact</p>
              </div>

              <div className="bg-white rounded-xl border border-gray-400/30 text-center shadow-sm py-4">
                <h1 className="text-4xl font-bold text-[#214b3e]">{fr.goal}</h1>
                <p className="text-gray-500 mt-2">Goal (Days)</p>
              </div>

              <div className="bg-white rounded-xl border border-gray-400/30 text-center py-4 px-2 shadow-sm">
                <h1 className="text-3xl font-bold text-[#214b3e]">
                  {fr.next_due_date}
                </h1>
                <p className="text-gray-500 ">Next Due</p>
              </div>
            </div>

            {/* Goal Card */}
            <div className="bg-white rounded-xl border border-gray-400/30 p-6 shadow-sm flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-[#214b3e]">
                  Relationship Goal
                </h2>

                <p className="text-gray-600 mt-3">
                  Connect every <span className="font-bold">30 days</span>
                </p>
              </div>

              <button className=" btn border border-gray-400/30 px-4 py-2 rounded-lg text-sm">
                Edit
              </button>
            </div>

            {/* Quick Check In */}
            <div className="bg-white rounded-xl border border-gray-400/30 p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-[#214b3e] mb-5">
                Quick Check-In
              </h2>

              <HandleBtn fr={fr}></HandleBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
