"use client"

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
    <div className="flex flex-wrap justify-center gap-8p-8 -mb-60">
   <div className="text-center mt-20 mb-10 px-10">
          <TypeAnimation
            sequence={["Professional Skills", 1000]}
            wrapper="h2"
            speed={50}
            className="text-4xl font-extrabold bg-gradient-to-r from-red-600 to-yellow-600 text-transparent bg-clip-text"
            style={{
              lineHeight: "2",
              marginBottom: "1rem",
            }}
            repeat={Infinity}
          />
      </div>
      
      {skillsData.map((skill, index) => (
        <NeonSkillCircle key={index} skill={skill.skill} percentage={skill.percentage} />
      ))}
    </div>
  );
};

export default ProfessionalSkillsChart;
