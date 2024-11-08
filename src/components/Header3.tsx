"use client";
import React from "react";
import Image from "next/image";

export const Header1: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 md:py-10 bg-gradient-to-br from-red-600 to-yellow-600 flex flex-col items-center justify-center">
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
         
        <div className="sparkle transition-transform duration-300 hover:scale-110 -mt-2">
            <Image
              src="/images/ecommerce.png"
              alt="ecommerce Icon"
              width={100}
              height={100}
              className="w-20 md:w-28 lg:w-32"
              />
          </div>
        
          <div className="sparkle transition-transform duration-300 hover:scale-110 -mt-4">
            <Image
              src="/images/portfolio1.png"
              alt="portfolio1 Icon"
              width={120}
              height={80}
              
            className="w-20 md:w-28 lg:w-32"
            />
          </div>
        
          <div className="sparkle transition-transform duration-300 hover:scale-110">
            <Image
              src="/images/api.png"
              alt="api Icon"
              width={120}
              height={80}
              
            className="w-20 md:w-28 lg:w-32"
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
