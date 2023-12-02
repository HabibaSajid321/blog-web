"use client";
import { usePathname } from "next/navigation";
import React, { FC } from "react";
import { Routes } from "@/types/ComponentTypes";
import Link from "next/link";
const Navbar: FC = () => {
  const pathname = usePathname();
  const routes: Routes[] = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Blogs",
      path: "/",
    },
    {
      name: "About",
      path: "/",
    },
  ];
  return (
    <div className="pb-3 hidden md:flex justify-center items-center border-b-[2px] border-b-[#977759] pt-8  ">
      <div className="w-full md:w-[1170px] flex justify-center items-center gap-7 lg:px-0 px-5">
        {routes.map((val, i) => {
          return (
            <Link
              key={i}
              href={val.path}
              className={` font-normal border-b-[3px]  ${
                val.path === pathname
                  ? "border-b-[#662121] text-[#662121]"
                  : "border-b-[#662121] text-[#662121]"
              } hover:border-b-[#ffc017] hover:text-[#ffc017] transition-all duration-200`}
            >
              {val.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
