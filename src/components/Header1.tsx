"use client";
import React from "react";
import Image from "next/image";

export const Header1: React.FC = () => {
  return (
    <div className="fixed top-14 left-0 right-0 md:px-10 pt-10 md:py-12 z-10 backdrop-blur-lg bg-yellow-900 bg-opacity-96 shadow-lg border border-white/20 rounded-lg">
      {/* Fixed "Let's Connect" image outside the moving icons */}
      <div className="absolute inset-0 flex justify-center items-center z-10">
        <Image
          src="/images/lets-connect.png"
          alt="Let's Connect Icon"
          width={400}
          height={200}
          className="m-1 w-40 sm:w-[300px] md:w-[500px] lg:w-[600px] h-auto"
        />
      </div>

      {/* Orbiting social media icons */}
      <div className="absolute inset-0 flex justify-center items-center z-0 opacity-80 rounded-full">
        <div className="relative w-40 h-40 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80">
          {/* WhatsApp Icon */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 animate-orbit">
            <Image
              src="/images/WhatsApp.png"
              alt="WhatsApp Icon"
              width={100}
              height={100}
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
            />
          </div>

          {/* LinkedIn Icon */}
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 animate-reverse-orbit">
            <Image
              src="/images/linkedin.png"
              alt="LinkedIn Icon"
              width={100}
              height={100}
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
            />
          </div>

          {/* Instagram Icon */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 animate-orbit">
            <Image
              src="/images/insta.png"
              alt="Instagram Icon"
              width={100}
              height={100}
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
            />
          </div>

          {/* Facebook Icon */}
          <div className="absolute top-1/2 left-full transform -translate-y-1/2 animate-reverse-orbit">
            <Image
              src="/images/facebook.png"
              alt="Facebook Icon"
              width={100}
              height={100}
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
            />
          </div>

          {/* Twitter Icon */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-orbit">
            <Image
              src="/images/twiter.png"
              alt="Twitter Icon"
              width={100}
              height={100}
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
            />
          </div>
        </div>
      </div>

      {/* Glassmorphism container */}
      <div className="relative z-10 mx-auto p-2 sm:p-4 md:p-6 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg backdrop-blur-lg bg-white bg-opacity-20 shadow-md border border-white/10 rounded-lg mt-32 -mt-16 sm:mt-40 md:mt-48 lg:mt-56 mb-10 md:mb-12 lg:mb-16">
        <div className="flex justify-center px-4 py-3">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-center text-white">
            Let&apos;s Connect
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header1;
