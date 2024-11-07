"use client";

import Link from "next/link";
import React, { useState, useCallback } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Projects", path: "/projects" },
  { title: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = useCallback(() => {
    setNavbarOpen((prevOpen) => !prevOpen);
  }, []);

  const closeNavbar = () => setNavbarOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100 border border-[#33353F]">
      <div className="flex items-center justify-between px-4 py-3 container mx-auto lg:py-4">
        <Link href="/" className="text-2xl md:text-4xl text-white font-semibold">
          Ummay Kulsoom
        </Link>
        
        {/* Hamburger icon for mobile */}
        <div className="flex md:hidden">
          <button
            onClick={toggleNavbar}
            aria-expanded={navbarOpen ? "true" : "false"}
            aria-label={navbarOpen ? "Close menu" : "Open menu"}
            className="p-2 rounded border border-slate-200 text-slate-200 hover:text-white hover:border-white transition-all"
          >
            {navbarOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {navbarOpen && (
        <MenuOverlay
          links={navLinks.map(link => ({ title: link.title, path: link.path, onClick: closeNavbar }))}
        />
      )}
    </nav>
  );
};

export default Navbar;
