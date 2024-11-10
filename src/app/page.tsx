// pages/index.tsx
import React from "react";
import HeroSection from "../components/HeroSection"; 
import AboutMe from "../components/AboutSection"; 
import ProjectSection from "../components/ProjectSection";
import Skills from '../components/Skills';
import ContactForm from '../components/ContactForm';
import Contacts from "../components/Contacts"
import PolygonCard from '../components/PolygonCard';
import ProfessionalSkillsChart from "../components/ProfessionalSkillsChart"


const HomePage: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] items-center justify-center">
      <div className="text-center">
        {/* Intro or main heading could go here */}
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-12 py-4 mt-10">
        <HeroSection />
      </div>

      {/* About Me Section */}
      <div className="container mx-auto flex items-center justify-center bg-[#121212]">
        <AboutMe />
      </div>

      {/* Project Section */}
      <div className="min-h-screen bg-[#121212] flex flex-col items-center py-5 my-10">
        <h1 className="text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-red-600 to-yellow-600 text-transparent bg-clip-text mb-14">
          My Projects
        </h1>
        <PolygonCard />
        <ProjectSection />
      </div>

      {/* Skill Section */}
      <div className="container mx-auto">
        <Skills />
      </div>

      {/* Professional Skills Chart */}
      <div className="min-h-screen flex items-center justify-center">
        <ProfessionalSkillsChart />
      </div>

      {/* Contact Form Section */}
      <div className="container mx-auto -mt-40 lg:mt-20">
        <ContactForm />
      </div>

      {/* Contacts */}
      <div className="container mx-auto">
        <Contacts />
      </div>
    </main>
  );
};

export default HomePage;
