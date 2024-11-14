"use client";
import React, { useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { FaCode, FaGraduationCap, FaCertificate, FaClipboardList } from 'react-icons/fa';

// Define the structure of each tab's data
interface TabData {
  title: string;
  id: string;
  icon: JSX.Element;
  content: JSX.Element;
}

const TAB_DATA: TabData[] = [
  {
    title: "Skills",
    id: "skills",
    icon: <FaCode className="inline-block mr-2 text-blue-300" />,
    content: (
      <ul className="list-disc pl-4">
        <li>Node.js</li>
        <li>Next.js</li>
        <li>Tailwind CSS</li>
        <li>TypeScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    icon: <FaGraduationCap className="inline-block mr-2 text-purple-300" />,
    content: (
      <ul className="list-disc pl-4">
        <li>Graduation</li>
        <li>Karachi University</li>
        <li>Web3.0</li>
        <li>Governor House Karachi</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    icon: <FaCertificate className="inline-block mr-2 text-orange-300" />,
    content: (
      <ul className="list-disc pl-4">
        <li>DigiSkills</li>
        <li>Udemy</li>
        <li>Google Garage</li>
        <li>Governor House Karachi</li>
      </ul>
    ),
  },
  {
    title: "Expertise",
    id: "expertise",
    icon: <FaClipboardList className="inline-block mr-2 text-teal-300" />,
    content: (
      <ul className="list-disc pl-4">
        <li>Web Development</li>
        <li>Responsive Design</li>
        <li>UI/UX Design</li>
        <li>Problem Solving</li>
      </ul>
    ),
  },
];

const AboutSection: React.FC = () => {
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  return (
    <section className="bg-[#121212] text-white py-8 px-4 xl:px-16">
      <div className="md:grid md:grid-cols-2 items-center">
        {/* About Image */}
        <Image
          src="/images/aboutme.png"
          alt="profile-image"
          width={500}
          height={500}
          className="rounded-full mx-auto"
        />

        {/* About Me Text */}
        <div className="text-center md:text-left mt-6 md:mt-0">
          <TypeAnimation
            sequence={["About Me", 1000]}
            wrapper="h2"
            speed={50}
            className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-red-600 to-yellow-600 text-transparent bg-clip-text"
            style={{
              lineHeight: "2",
              marginBottom: "1rem",
            }}
            repeat={Infinity}
          />
          <p className="text-base lg:text-lg mb-6">
            I&apos;m a passionate web developer with experience in building modern
            and responsive websites using the latest technologies. I enjoy
            turning complex problems into simple, beautiful, and intuitive
            designs.
          </p>

          {/* Grid Layout for Tabs (Colorful Bricks) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* First Row (Mobile: First and Second Brick) */}
            <div
              className="col-span-1 md:col-span-1 p-4 rounded-lg bg-gradient-to-r from-blue-500 to-green-500 shadow-lg hover:shadow-xl cursor-pointer text-sm md:text-lg"
              onMouseEnter={() => setHoveredTab("skills")}
              onMouseLeave={() => setHoveredTab(null)}
            >
              <h3 className="text-lg font-bold flex items-center text-gray-300">
                {TAB_DATA[0].icon}
                {TAB_DATA[0].title}
              </h3>
              {hoveredTab === "skills" && <div className="mt-2">{TAB_DATA[0].content}</div>}
            </div>

            <div
              className="col-span-1 md:col-span-2 p-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg hover:shadow-xl cursor-pointer text-sm md:text-lg"
              onMouseEnter={() => setHoveredTab("education")}
              onMouseLeave={() => setHoveredTab(null)}
            >
              <h3 className="text-lg font-bold flex items-center text-gray-300">
                {TAB_DATA[1].icon}
                {TAB_DATA[1].title}
              </h3>
              {hoveredTab === "education" && <div className="mt-2">{TAB_DATA[1].content}</div>}
            </div>

            {/* Second Row (Mobile: Third and Fourth Brick) */}
            <div
              className="col-span-1 md:col-span-2 p-4 rounded-lg bg-gradient-to-r from-orange-500 to-yellow-500 shadow-lg hover:shadow-xl cursor-pointer text-sm md:text-lg"
              onMouseEnter={() => setHoveredTab("certifications")}
              onMouseLeave={() => setHoveredTab(null)}
            >
              <h3 className="text-lg font-bold flex items-center text-gray-300">
                {TAB_DATA[2].icon}
                {TAB_DATA[2].title}
              </h3>
              {hoveredTab === "certifications" && <div className="mt-2">{TAB_DATA[2].content}</div>}
            </div>

            <div
              className="col-span-1 md:col-span-1 p-4 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 shadow-lg hover:shadow-xl cursor-pointer text-sm md:text-lg"
              onMouseEnter={() => setHoveredTab("expertise")}
              onMouseLeave={() => setHoveredTab(null)}
            >
              <h3 className="text-lg font-bold flex items-center text-gray-300">
                {TAB_DATA[3].icon}
                {TAB_DATA[3].title}
              </h3>
              {hoveredTab === "expertise" && <div className="mt-2">{TAB_DATA[3].content}</div>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
