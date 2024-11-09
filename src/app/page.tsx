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
    
</div>

      {/* Hero Section */}
      <div className="container mx-auto px-12 py-4">
        <HeroSection />
      </div>
      
      {/* About Me Section */}
      <div className="flex items-center justify-center bg-[#121212]">
        <AboutMe />
      </div>

      {/* Project Section */}
      <div className="min-h-screenbg-[#121212] flex flex-col items-center py-5 my-10">
           
           <h1  className="text-4xl lg:5xl font-extrabold bg-gradient-to-r from-red-600 to-yellow-600 text-transparent bg-clip-text mb-14">My Projects</h1>
         <PolygonCard />
        </div>
        
         <div>
        <ProjectSection />
         </div>      
             
      {/* Skill Section */}
      
      <Skills/>

      <div className="min-h-screen flex items-center justify-center ">
        
      <ProfessionalSkillsChart/>
    </div>
        {/* ContactUs Section */}
        <div className="-mt-40 lg:mt-20">
      <ContactForm/>
      </div>

            <Contacts/>
   </main>
  );
};

export default HomePage;
