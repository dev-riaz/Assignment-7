"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinks = ({ href, children, icon }) => {
  const pathName = usePathname();
 
  return (
    <Link
      href={href}
      className={`text-[#64748B] p-2 rounded ${pathName === href ? "bg-[#244D3F] text-white" : ""}`}
    >
      <div>
        {icon}
        {children}
      </div>
    </Link>
  );
};

export default NavLinks;
