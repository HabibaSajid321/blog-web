"use client";

import Navbar from "@/components/shared/Navbar/Navbar";
import React, { FC, useState } from "react";
import Image from "next/image";
import BlogImage from "../../../public/assets/blog1.jpeg";

const Blogs: FC = () => {
  const [blogs, setBlogs] = useState<any>([
    {
      blogSrc: BlogImage,
      title:
        "Programming Languages to Learn Today and Others That Are Slowly Dying",
    },

    {
      blogSrc: BlogImage,
      title:
        "Programming Languages to Learn Today and Others That Are Slowly Dying",
    },
    {
      blogSrc: BlogImage,
      title:
        "Programming Languages to Learn Today and Others That Are Slowly Dying",
    },
    {
      blogSrc: BlogImage,
      title:
        "Programming Languages to Learn Today and Others That Are Slowly Dying",
    },
    {
      blogSrc: BlogImage,
      title:
        "Programming Languages to Learn Today and Others That Are Slowly Dying",
    },
    {
      blogSrc: BlogImage,
      title:
        "Programming Languages to Learn Today and Others That Are Slowly Dying",
    },
  ]);

  return (
    <div className="bg-[#ffc017]">
      <div className="bg-white">
        <Navbar />
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full lg:w-[75%] pt-3 lg:pt-3 p-0 lg:p-5">
          <div className="flex items-center justify-center">
            <p className="text-[#742626] text-[18px] font-semibold  ">
              New Blogs
            </p>
          </div>

          <div className="flex items-center justify-start gap-3 flex-wrap py-10">
            {blogs.length > 0 &&
              blogs.map((val: any, i: number) => {
                return (
                  <div
                    key={i}
                    className="w-full md:w-[230px] lg:w-[250px] cursor-pointer border-gray-200 hover:border-[#662121] border-[1px] rounded-[4px] flex flex-col transition-all duration-300"
                  >
                    <div className="w-full flex justify-center items-center p-5">
                      <Image
                        src={val.blogSrc}
                        alt="blog_image"
                        width={280}
                        height={280}
                        loading="eager"
                      />
                    </div>
                    <div className="flex flex-col justify-center gap-2 py-2 items-center w-full px-4">
                      <p className="capitalize text-black text-sm text-center font-semibold">
                        {val.title}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
