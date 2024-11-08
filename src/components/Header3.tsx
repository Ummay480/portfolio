"use client";
import React from "react";
import Image from "next/image";

const Header3: React.FC = () => {
  return (
    <div className="fixed top-14 left-0 right-0 md:px-10 pt-10 md:py-12 bg-gradient-to-br from-red-600 to-yellow-600 z-10">
      {/* Social media icons with consistent size */}
      <div className="relative flex flex-wrap justify-center items-center z-10 opacity-80 rounded-full space-x-4 md:space-x-8">
        {/* Education Icon */}
        <div className="sparkle transition-transform duration-300 hover:scale-110 -mt-10">
          <Image
            src="/images/portfolio1.png"
            alt="Ecommerce Icon"
            width={100}
            height={100}
            className="w-20 md:w-28 lg:w-32 lg:ml-20"
          />
        </div>

        {/* Skills Icon */}
        <div className="sparkle transition-transform duration-300 hover:scale-110 -mt-14 ">
          <Image
            src="/images/api3.png"
            alt="API Icon"
            width={100}
            height={100}
            className="w-20 md:w-28 lg:w-32 ml-20"
          />
        </div>

        {/* Another Skill Icon */}
        <div className="sparkle transition-transform duration-300 hover:scale-110 -mt-2">
          <Image
            src="/images/ecommerce.png"
            alt="Ecommerce Icon"
            width={100}
            height={100}
            className="w-20 md:w-28 lg:w-32 "
          />
        </div>

        {/* Certificate Icon */}
        <div className="absolute inset-0 flex justify-center items-center z-10 mt-32 lg:mt-44">
          <Image
            src="/images/projects.png"
            alt="Projects Icon"
            width={400}
            height={100}
            className="m-1 w-60 sm:w-[300px] md:w-[400px] lg:w-[400px] h-auto"
          />
        </div>
      </div>

      {/* Glassmorphism container */}
      <div className="relative z-30 container mx-auto p-6 max-w-md w-full backdrop-blur-lg bg-white bg-opacity-20 shadow-md border border-white/10 rounded-lg mt-6 mb-12">
        <div className="flex justify-center px-6 py-1">
          <h1 className="lg:text-4xl md:text-3xl text-2xl font-semibold text-white">
            Projects
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header3;
