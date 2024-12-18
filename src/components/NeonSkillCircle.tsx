// components/NeonSkillCircle.tsx

"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface NeonSkillCircleProps {
  skill: string;
  percentage: number;
}

const NeonSkillCircle: React.FC<NeonSkillCircleProps> = ({ skill, percentage }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < percentage) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 20); // Adjust speed of loading here
    return () => clearInterval(interval);
  }, [percentage]);

  return (
    <>
      {/* Desktop Version */}
      <div className="relative hidden sm:flex items-center justify-center w-40 h-40 m-4">
        <svg className="absolute w-full h-full">
          <defs>
            <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00f6ff" />
              <stop offset="100%" stopColor="#ff00c7" />
            </linearGradient>
          </defs>

          {/* Background Circle */}
          <circle
            className="text-gray-700"
            strokeWidth="6"
            stroke="currentColor"
            fill="transparent"
            r="70"
            cx="80"
            cy="80"
          />

          {/* Neon Glow Circle */}
          <motion.circle
            className="neon-circle"
            stroke="url(#neonGradient)"
            strokeWidth="6"
            strokeLinecap="round"
            fill="transparent"
            r="70"
            cx="80"
            cy="80"
            style={{
              pathLength: progress / 100,
            }}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: progress / 100 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </svg>

        {/* Skill Label and Percentage */}
        <div className="absolute flex flex-col items-center text-white">
          <motion.span
            className="text-3xl font-bold"
            animate={{ opacity: [0, 1], scale: [0.8, 1] }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {progress}%
          </motion.span>
          <span className="text-sm text-gray-300">{skill}</span>
        </div>
      </div>

 {/* Mobile Version */}
<div className="relative flex sm:hidden items-center justify-center w-28 h-28 pl-10  ">
  <svg className="absolute w-full h-full">
    <defs>
      <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#00f6ff" />
        <stop offset="100%" stopColor="#ff00c7" />
      </linearGradient>
    </defs>

    {/* Background Circle */}
    <circle
      className="text-gray-700"
      strokeWidth="5"  // Slightly thicker background stroke
      stroke="currentColor"
      fill="transparent"
      r="45"  // Increased radius for visibility
      cx="50"
      cy="50"
    />

    {/* Neon Glow Circle */}
    <motion.circle
      className="neon-circle"
      stroke="url(#neonGradient)"  // Ensure gradient stroke is applied here
      strokeWidth="5"  // Increased stroke width for neon effect
      strokeLinecap="round"
      fill="transparent"
      r="45"  // Match radius with background circle
      cx="50"
      cy="50"
      style={{
        pathLength: progress / 100,
      }}
      initial={{ pathLength: 0 }}
      animate={{ pathLength: progress / 100 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    />
  </svg>

  {/* Skill Label and Percentage */}
  <div className="absolute flex flex-col items-center text-white">
    <motion.span
      className="text-md font-bold"
      animate={{ opacity: [0, 1], scale: [0.8, 1] }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      {progress}%
    </motion.span>
    <span className="text-center text-xs px-6 text-gray-300">{skill}</span>
  </div>
</div>


    </>
  );
};

export default NeonSkillCircle;
