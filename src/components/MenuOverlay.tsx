"use client";

import React from "react";
import NavLink from "./NavLink";

interface LinkItem {
  title: string;
  path: string;
}

interface MenuOverlayProps {
  links: LinkItem[];
  className?: string; // Optional className prop to customize styles
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ links, className }) => {
  return (
    <ul
      className={`fixed top-0 right-0 h-auto w-1/3 bg-white/30 backdrop-blur-lg z-30 ${className} py-4 
                  shadow-2xl rounded-lg`} // Added shadow and rounded corners for 3D effect
    >
      {links.map((link, index) => (
        <li key={index} className="my-4">
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
