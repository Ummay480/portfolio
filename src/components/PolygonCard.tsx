"use client";

import React from 'react';
import Image from 'next/image';

interface PolygonCardData {
  id: number;
  title: string;
  imageSrc: string;
  link: string; // Add link for the "Visit" button
}

const polygonData: PolygonCardData[] = [
  { id: 1, title: "Calculator", imageSrc: "/images/calculator.png", link: "https://github.com/Ummay480/simple-calculator" },
  { id: 2, title: "ATM", imageSrc: '/images/Atm.png', link: "https://github.com/Ummay480/atm" },
  { id: 3, title: "Number Guessing Game", imageSrc: '/images/number-guessing-game.jpg', link: "https://github.com/Ummay480/cli-number-guessing-game" },
  { id: 4, title: "Currency Converter", imageSrc: '/images/currency_converter.png', link: "https://github.com/Ummay480/currency-convertor" },
  { id: 5, title: "To-Do List", imageSrc: '/images/to-do-list.png', link: "https://github.com/Ummay480/to-do" },
  { id: 6, title: "Student Management", imageSrc: '/images/student-management.png', link: "https://github.com/Ummay480/student-management-system" },
];

const gradientPolygonColors = [
  'linear-gradient(45deg, red, yellow)',
  'linear-gradient(45deg, yellow, red)',
  'linear-gradient(45deg, red, orange)',
  'linear-gradient(45deg, yellow, orange)',
  'linear-gradient(45deg, red, gold)',
  'linear-gradient(45deg, yellow, gold)',
];

const CustomPolygonCard: React.FC = () => {
  const polygonCount = polygonData.length;
  const radius = 150;

  return (
    <div className="relative w-full h-[400px] flex justify-center items-center bg-[#121212] py-20">
      <style jsx>{`
        @keyframes borderPulse {
          0% { border-color: red; }
          33% { border-color: yellow; }
          66% { border-color: orange; }
          100% { border-color: red; }
        }
        .animated-border {
          animation: borderPulse 3s infinite;
          border: 3px solid;
        }

        .glass-effect:hover {
          backdrop-filter: blur(10px) saturate(200%) contrast(1.2);
          border-color: rgba(255, 255, 255, 0.4);
        }

        .project-card-overlay {
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .glass-effect:hover .project-card-overlay {
          opacity: 1;
        }

        .card-title {
          font-size: 12px;
          font-weight: bold;
          color: white;
        }

        .visit-link {
          background-color: rgba(255, 255, 255, 0.8);
          color: black;
          padding: 6px 12px;
          border-radius: 8px;
          margin-top: 10px;
          text-decoration: none;
          font-weight: 300;
          text-align: center;
          display: block;
          transition: background-color 0.3s ease;
        }

        .visit-link:hover {
          background-color: rgba(255, 255, 255, 1);
        }
      `}</style>

      {polygonData.map((polygon, index) => {
        const angle = (index / polygonCount) * 360;
        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);

        return (
          <div
            key={polygon.id}
            className="absolute"
            style={{ transform: `translate(${x}px, ${y}px)` }}
          >
            <div
              className="absolute ml-14 top-2 animated-border"
              style={{
                width: '100px',
                height: '80px',
                clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                background: gradientPolygonColors[index % gradientPolygonColors.length],
                zIndex: 10,
                transform: 'translate(-50%, -50%)',
                boxShadow: '110 3px 6px rgba(0, 0, 0, 0.3)',
              }}
            />
            <div
              className="relative w-28 h-28 animated-border flex justify-center items-center text-center bg-black glass-effect"
              style={{
                clipPath: 'polygon(0% 1%, 100% 3%, 100% 75%, 50% 100%, 0% 75%)',
                padding: '8px',
                boxShadow: `0 0 6px rgba(255, 0, 0, 0.6),
                0 0 10px rgba(255, 255, 0, 0.4),
                0 0 12px rgba(255, 255, 255, 0.2)`,
                zIndex: 10,
                borderRadius: '15px',
              }}
            >
              <div
                className="absolute top-[-10px] left-1/2 transform -translate-x-1/2"
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  background: gradientPolygonColors[index % gradientPolygonColors.length],
                  zIndex: 20,
                }}
              />

              <div className="absolute flex justify-center items-center">
                <Image
                  src={polygon.imageSrc}
                  alt="Polygon Image"
                  width={60}
                  height={40}
                  className="object-contain rounded-full"
                  onError={(e) => { e.currentTarget.src = '/images/default-image.png'; }} // Fallback image
                />
              </div>

              {/* Hover effect container, now with title and "Visit" button */}
              <div className="project-card-overlay absolute inset-0 flex justify-center items-center flex-col">
                <span className="card-title">{polygon.title}</span>
                <a
                  href={polygon.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="visit-link"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>
        );
      })}

      <div
        className="absolute flex justify-center items-center text-center animated-border"
        style={{
          width: '120px',
          height: '120px',
          clipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)',
          boxShadow: 'inset 0 2px 8px rgba(255, 255, 255, 0.6), 0 6px 12px rgba(255, 255, 255, 0.8)',
          zIndex: 20,
          backgroundColor: 'black',
        }}
      >
        <Image
          src="/images/api.png"
          alt="api"
          width={100}
          height={80}
          onError={(e) => { e.currentTarget.src = '/images/default-image.png'; }} // Fallback image
        />
      </div>
    </div>
  );
};

export default CustomPolygonCard;
