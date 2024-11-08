"use client";
import React from "react";
import Image from "next/image";

// Define the skill logos with their direct paths
const skills = [
  { title: "HTML", image: "/images/html-logo.svg" },
  { title: "CSS", image: "/images/css-logo.svg" },
  { title: "JavaScript", image: "/images/js-logo.svg" },
  { title: "TypeScript", image: "/images/ts-logo.svg" },
  { title: "Next.js", image: "/images/nextjs-logo.svg" },
  { title: "Tailwind CSS", image: "/images/tailwind-logo.svg" },
  { title: "Node.js", image: "/images/nodejs-logo.svg" },
  { title: "React", image: "/images/react-logo.svg" },
  { title: "API Development", image: "/images/api-logo.svg" },
  { title: "Figma", image: "/images/figma-logo.svg" },
  { title: "WordPress", image: "/images/WordPress.svg" },
  { title: "Wix", image: "/images/wix-logo.svg" },
  { title: "Shopify", image: "/images/shopify-logo.svg" },
  { title: "Elementor", image: "/images/elementor-logo.svg" },
  { title: "WooCommerce", image: "/images/woocommerce-logo.svg" },
  { title: "ShadCn", image: "/images/shadcn-logo.png" },
];

const Skills = () => {
  return (
    <section className="py-12 bg-[#121212]">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
          <span className="text-4xl lg:5xl font-extrabold bg-gradient-to-r from-red-600 to-yellow-600 text-transparent bg-clip-text">
            My Skills
          </span>
        </h2>

        {/* Container for skill logos with globe rotation */}
        <div className="relative w-full h-72 animate-rotate-globe flex justify-center items-center -mb-96">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-item flex justify-center items-center"
              style={{
                animationDelay: `${index * 0.5}s`, // Staggered effect
              }}
            >
              <Image
                src={skill.image}
                alt={`${skill.title} logo`}
                className="skill-logo p-10 gap-6"
                width={200}
                height={200}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
