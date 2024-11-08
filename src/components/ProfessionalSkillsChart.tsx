"use client";

import React from 'react';
import NeonSkillCircle from './NeonSkillCircle';
import { TypeAnimation } from "react-type-animation"; 

const skillsData = [
  { skill: "Time Management", percentage: 80 },
  { skill: "Team Work", percentage: 90 },
  { skill: "Problem Solving", percentage: 90 },
  { skill: "Communication Skills", percentage: 70 },
];

const ProfessionalSkillsChart: React.FC = () => {
  return (
    <div className="flex flex-col items-center class mt-96 md:mt-8 lg:-mt-52 -mb-40 lg:-mb-96">
      {/* Section Title */}
      <div className="text-center mb-20 px-4">
        <TypeAnimation
          sequence={["Professional Skills", 1000]}
          wrapper="h2"
          speed={50}
          className="text-5xl sm:text-3xl font-extrabold bg-gradient-to-r from-red-600 to-yellow-600 text-transparent bg-clip-text"
          style={{
            lineHeight: "1.5",
            marginBottom: "1rem",
          }}
          repeat={Infinity}
        />
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl">
        {skillsData.map((skill, index) => (
          <NeonSkillCircle key={index} skill={skill.skill} percentage={skill.percentage} />
        ))}
      </div>
    </div>
  );
};

export default ProfessionalSkillsChart;
