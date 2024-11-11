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
    <nav className="fixed top-0 z-20 w-full bg-[#121212] mx-auto md:max-w-4xl lg:max-w-6xl">
      <div className="container flex items-center justify-between mx-auto px-20 md:px-8 py-6 lg:py-4">
        <Link href="/" className="text-3xl lg:5xl font-extrabold bg-gradient-to-r from-red-600 to-yellow-600 text-transparent bg-clip-text -ml-20">
          Ummay.K
        </Link>

        {/* Hamburger menu for small screens only */}
        <div className="block md:hidden">
          <button
            onClick={toggleNavbar}
            aria-expanded={navbarOpen ? "true" : "false"}
            aria-label={navbarOpen ? "Close menu" : "Open menu"}
            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
          >
            {navbarOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
          </button>
        </div>

        {/* Navigation links for desktop */}
        <div className={`md:block hidden md:w-auto`}>
          <ul className="flex flex-col md:flex-row items-center md:space-x-8 p-4 md:p-0">
            {navLinks.map((link, index) => (
              <li key={index} className="w-full md:w-auto">
                <NavLink href={link.path} title={link.title} onClick={closeNavbar} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Overlay menu for mobile */}
      {navbarOpen && (
        <MenuOverlay
          links={navLinks.map((link) => ({
            title: link.title,
            path: link.path,
            onClick: closeNavbar,
          }))}
        />
      )}
    </nav>
  );
};

export default Navbar;
