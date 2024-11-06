"use client";

import React from "react";

interface ProjectCardProps {
  title: string;
  imageSrc: string;
  isVideo: boolean;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, imageSrc, isVideo, link }) => {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg transition-transform duration-300 transform project-card">
      {/* Project content (Image or Video) */}
      {isVideo ? (
        <video src={imageSrc} className="w-full h-full object-cover" autoPlay loop muted playsInline />
      ) : (
        <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
      )}

      {/* Glass effect overlay on hover */}
      <div className="project-card-overlay">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-gray-500 bg-opacity-80 px-4 py-2 rounded-lg hover:bg-opacity-100 transition-all duration-200"
        >
          View/Visit
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
