import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "Portfolio",
    imageSrc: '/images/portfolio-1.jpg',
    logoSrc: '/images/nextjs-logo.svg',
    link: '#',
  },
  {
    title: 'Real Estate',
    imageSrc: '/images/project1.jpeg',
    logoSrc: '/images/figma-logo.svg',
    link: '#',
  },
  {
    title: 'E-Commerce',
    imageSrc: '/images/project.jpeg',
    logoSrc: '/images/shopify-logo.svg',
    link: '#',
  },
  {
    title: 'Marketing Agency',
    imageSrc: '/images/project2.jpeg',
    logoSrc: '/images/wordpress.svg',
    link: '#',
  },
  {
    title: 'Resume Builder',
    imageSrc: '/images/project4.jpeg',
    logoSrc: '/images/ts-logo.svg',
    link: '#',
  },
  {
    title: "Calculator",
    imageSrc: '/images/Calculator1.jpeg',
    logoSrc: '/images/ts-logo.svg',
    link: '#',
  },
  {
    title: "Clone",
    imageSrc: '/images/project5.jpeg',
    logoSrc: '/images/html-logo.svg',
    link: '#',
  },
  {
    title: 'Clone',
    imageSrc: '/images/project6.jpeg',
    logoSrc: '/images/html-logo.svg',
    link: '#',
  },
  {
    title: 'Resume',
    imageSrc: '/images/project7.jpeg',
    logoSrc: '/images/html-logo.svg',
    link: '#',
  },
];

const ProjectSection = () => {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 reflected-border">
      <div className="bg-black py-0 px-0"> {/* Reduced padding */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"> {/* Smaller gaps */}
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              imageSrc={project.imageSrc}
              logoSrc={project.logoSrc} 
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
