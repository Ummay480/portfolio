import React from "react";
import HeroSection from "../components/HeroSection"; 
import AboutMe from "../components/AboutSection"; 
import ProjectSection from "../components/ProjectSection";
import Skills from '../components/Skills';
import ContactForm from '../components/ContactForm';
import Contacts from "../components/Contacts";
import PolygonCard from '../components/PolygonCard';
import ProfessionalSkillsChart from "../components/ProfessionalSkillsChart";


const HomePage: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#121212] overflow-x-hidden">
      <div className="text-center">
        {/* Intro or main heading could go here */}
      </div>

      {/* Hero Section */}
      <div className="w-full px-20 sm:px-8 lg:px-12 py-4 mt-10">
        <HeroSection />
      </div>

      {/* About Me Section */}
      <div className="w-full flex items-center justify-center bg-[#121212] px-4 sm:px-8 lg:px-12">
        <AboutMe />
      </div>
          
      {/* Project Section */}
      <div className="w-full flex flex-col items-center py-5 my-10 bg-[#121212]">
        <h1 className="text-3xl lg:text-5xl font-extrabold bg-gradient-to-r from-red-600 to-yellow-600 text-transparent bg-clip-text mb-14">
          My Projects
        </h1>
        <PolygonCard />
        <ProjectSection />
      </div>

      {/* Skills Section */}
      <div className="w-full px-4 sm:px-8 lg:px-12 ">
        <Skills />
      </div>

      {/* Professional Skills Chart */}
      <div className="w-full flex items-center justify-center min-h-screen px-4 sm:px-8 lg:px-12 -mt-20">
        <ProfessionalSkillsChart />
      </div>

      {/* Contact Form Section */}
      <div className="w-full px-4 sm:px-8 lg:px-12 -mt-40 lg:-mt-10">
        <ContactForm />
      </div>

      {/* Contacts */}
      <div className="w-full px-4 sm:px-8 lg:px-12 -mt-20">
        <Contacts />
      </div>
    </main>
  );
};

export default HomePage;
