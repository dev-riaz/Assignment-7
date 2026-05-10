import React from "react";
import { FaPlus } from "react-icons/fa";
import StatsCard from "../statsCard/StatsCard";


const Banner = () => {
  return (
    <div className="w-4xl mx-auto">
      <div className="hero py-4">
        <div className="hero-content text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-[#1F2937]">
              Friends to keep close in your life
            </h1>
            <p className="">
              Your personal shelf of meaningful connections. Browse, tend, and
              nurture the <br /> relationships that matter most.
            </p>
            <button className="btn bg-[#244D3F] text-white border-none">
              <FaPlus />
              Add a Friend
            </button>
          </div>
        </div>
      </div>
      <StatsCard></StatsCard>
    </div>
  );
};

export default Banner;
