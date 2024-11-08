import React from 'react';
import PolygonCard from '../../components/PolygonCard';
import ProjectSection from "../../components/ProjectSection";
import Contacts from "../../components/Contacts";
import Header3 from "../../components/Header3";

const ProjectPage: React.FC = () => {
  return (
    <>
      {/* Header */}
      <div className="fixed top-14 left-0 right-0 z-10"> {/* Ensure header stays at top */}
        <Header3 />
      </div>

      {/* Spacer to offset the header's height */}
      <div className="py-10 my-72"> {/* Adjust padding to match header height */}
        <h1 className="flex justify-center text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-red-600 to-yellow-600 text-transparent bg-clip-text mt-20 lg:mt-40 mb-14 ">
          My Projects
        </h1>

        {/* Adjust PolygonCard positioning on mobile */}
        <div>
          <PolygonCard />
        </div>
      </div>

      {/* Project Section */}
      <div className="flex justify-center mt-20 lg:-mt-80">
        <ProjectSection />
      </div>

      {/* Contacts Section */}
      <div className="flex justify-center mt-20 mb-20">
        <Contacts />
      </div>
    </>
  );
};

export default ProjectPage;
