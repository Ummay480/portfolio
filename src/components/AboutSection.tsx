"use client";
import React from "react";
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

          {/* Grid Layout for Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TAB_DATA.map((tab) => (
              <div
                key={tab.id}
                className={`p-4 rounded-lg bg-gradient-to-r transition-shadow duration-300 shadow-lg hover:shadow-xl cursor-pointer ${
                  tab.id === "skills"
                    ? "from-blue-500 to-green-500"
                    : tab.id === "education"
                    ? "from-purple-500 to-pink-500"
                    : tab.id === "certifications"
                    ? "from-orange-500 to-yellow-500"
                    : "from-teal-500 to-cyan-500"
                }`}
                onMouseEnter={() => {
                  const element = document.getElementById(`${tab.id}-content`);
                  if (element) element.style.display = 'block';
                }}
                onMouseLeave={() => {
                  const element = document.getElementById(`${tab.id}-content`);
                  if (element) element.style.display = 'none';
                }}
              >
                <h3 className="text-lg font-bold flex items-center">
                  {tab.icon}
                  {tab.title}
                </h3>
                <div id={`${tab.id}-content`} className="mt-2 hidden">
                  {tab.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
