import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="bg-[#244D3F]">
        <footer className="flex flex-col mx-auto items-center  text-base-content rounded p-10 space-y-4">
         
          <h1 className="text-5xl text-white font-bold">KeenKeeper</h1>
          <nav>
            <p className="text-white/70">
              Your personal shelf of meaningful connections. Browse, tend, and
              nurture the relationships that matter most.
            </p>
            <div className="text-center space-y-2 mt-4">
              <p className="text-white/70 font-bold">Social Links</p>
              <div className="flex justify-center items-center gap-4">
                <span className="bg-white w-8 h-8 flex items-center justify-center rounded-full">
                  <FaSquareInstagram />
                </span>
                <span className="bg-white w-8 h-8 flex items-center justify-center rounded-full">
                  <FaFacebook />
                </span>
                <span className="bg-white w-8 h-8 flex items-center justify-center rounded-full">
                  <FaXTwitter />
                </span>
              </div>
            </div>
          </nav>
        </footer>
        <hr />
        <footer className="md:w-8/12 mx-auto sm:footer-horizontal p-2 text-[12px]">
          <aside className="flex justify-between text-white/50">
            <p>
              Copyright © {new Date().getFullYear()} - All right reserved by
              ACME Industries Ltd
            </p>
            <div className="flex gap-4">
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
              <p>Cookies</p>
            </div>
          </aside>
        </footer>
      </div>
    </>
  );
};

export default Footer;
