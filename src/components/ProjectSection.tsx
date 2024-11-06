"use client";

import React from "react";
import ProjectCard from "./ProjectCard";

interface Project {
  title: string;
  imageSrc: string;
  isVideo: boolean;
  link: string;
}

const projects: Project[] = [
  {
    title: "Portfolio",
    imageSrc: "/images/portfolio-1.jpg",
    isVideo: false,
    link: "https://portfolio-uq3i.vercel.app/",
  },
  {
    title: "Real Estate",
    imageSrc: "/videos/real-estate.mp4",
    isVideo: true,
    link: "https://real-estate-omega-topaz.vercel.app/",
  },
  {
    title: "Resume Builder",
    imageSrc: "/videos/resume-builder.mp4",
    isVideo: true,
    link: "https://resume-builder-nu-two.vercel.app/",
  },
  {
    title: "Calculator",
    imageSrc: "/videos/project12.mp4",
    isVideo: true,
    link: "https://github.com/Ummay480/White-Calculator",
  },
  {
    title: "E-Commerce",
    imageSrc: "/images/e-commerce.png",
    isVideo: false,
    link: "#",
  },
  {
    title: "Clone Amazon",
    imageSrc: "/images/Amazon.png",
    isVideo: false,
    link: "#",
  },
  {
    title: "Clone Sushiman",
    imageSrc:"/images/sushiman.png",
    isVideo:false,
    link: "#",
  },
  {
    title: "Landing Page",
    imageSrc: "/images/landing-page.png",
    isVideo: false,
    link: "#",
  },
  {
    title: "Digital Marketing",
    imageSrc: "/images/digital-marketing.png",
    isVideo: false,
    link: "www.marketingjet.tech",
  },
  {
    title: "Resume",
    imageSrc: "/videos/cv.mp4",
    isVideo: true,
    link: "https://github.com/Ummay480/CV",
  },
];

const ProjectSection: React.FC = () => {
  return (
    <div className="py-10 px-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            imageSrc={project.imageSrc}
            isVideo={project.isVideo}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
