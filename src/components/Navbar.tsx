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
    <nav className="fixed top-0 z-20 right-0 laft-0 w-full bg-gradient-to-r from-red-600 to-yellow-600 -ml-5 px-8 lg:px-40">
      <div className="container mx-auto flex items-center justify-between px-6 md:px-8 py-4 md:max-w-4xl lg:max-w-6xl">
        <Link
          href="/"
          className="text-3xl font-extrabold text-#ffff bg-clip-text -ml-6 md:-ml-20 lg:ml-40"
        >
          Ummay.K
        </Link>

        {/* Hamburger menu for small screens only */}
        <div className="block md:hidden">
          <button
            onClick={toggleNavbar}
            aria-expanded={navbarOpen ? "true" : "false"}
            aria-label={navbarOpen ? "Close menu" : "Open menu"}
            className="flex items-center px-3 py-2 border rounded border-slate-200 text-#ffff hover:text-white hover:border-white"
          >
            {navbarOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
          </button>
        </div>

        {/* Navigation links for desktop */}
        <div className="hidden md:block">
          <ul className="flex flex-row items-center space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} onClick={closeNavbar} className="text-gray-900" />
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
