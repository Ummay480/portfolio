"use client";
import React from "react";
import Image from "next/image";

export const Header1: React.FC = () => {
  return (
    <div className="relative w-full px-4 py-2 md:px-10 md:py-12 bg-gradient-to-br from-red-600 to-yellow-600 -mt-10 md:mt-5 lg:mt-5">
      {/* Fixed "Let's Connect" image outside the moving icons */}
      <div className="absolute inset-0 flex justify-center items-center z-10">
  <Image
    src="/images/projects.png"
    alt="Let's Connect Icon"
    width={400}   
    height={100} 
    className="m-1 w-60 sm:w-[400] md:w-[500px] lg:w-[600px] h-auto"
  />
</div>

      <div className="absolute inset-0 flex justify-center items-center z-0 opacity-80 rounded-full">
        <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
         
          <div className="absolute top-10 right-1/4 transform -translate-x-1/2 animate-orbit">
            <Image
              src="/images/ecommerce.png"
              alt="ecommerce Icon"
              width={150}
              height={60}
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            />
          </div>
        
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 animate-reverse-orbit">
            <Image
              src="/images/portfolio1.png"
              alt="portfolio1 Icon"
              width={100}
              height={60}
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            />
          </div>
        
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 animate-orbit">
            <Image
              src="/images/api.png"
              alt="api Icon"
              width={100}
              height={60}
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            />
          </div>
        </div>
      </div>

      {/* Glassmorphism container */}
      <div className="relative z-10 mx-auto p-4 sm:p-6 md:p-8 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg backdrop-blur-lg bg-white bg-opacity-20 shadow-md border border-white/10 rounded-lg mt-64 sm:mt-60 mb-16 md:mb-12 lg:mt-48 lg:mb-12">
  <div className="flex justify-center px-6 py-5">
    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center text-white">
     Projects
    </h1>
  </div>
</div>




    </div>
  );
};

export default Header1;
