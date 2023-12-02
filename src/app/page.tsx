import Welcome from "@/components/Welcome/Welcome";
import Navbar from "@/components/shared/Navbar/Navbar";
import React, { FC } from "react";

const Home: FC = () => {
  return (
    <div className="bg-">
      <Navbar />
      <div className="text-black flex flex-col items-center justify-center bg-[#ffc017] h-screen">
        <h1 className="text-5xl text-[#742626] font-bold">
          Welcome to my Blog
        </h1>
        <div className="pt-8">
          <button className="bg-[#742626] rounded-lg px-2 py-1 text-white">
            Start reading{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
