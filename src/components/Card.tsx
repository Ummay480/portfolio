"use client"
import React from 'react';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ className, children }) => {
  return (
    <div className={`border rounded-lg shadow-md ${className}`}>
      {children}
    </div>
  );
};

export const CardHeader: React.FC<CardProps> = ({ children, className }) => (
  <div className={`p-4 border-b ${className}`}>{children}</div>
);

export const CardContent: React.FC<CardProps> = ({ children, className }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

export const CardFooter: React.FC<CardProps> = ({ children, className }) => (
  <div className={`p-4 border-t ${className}`}>{children}</div>
);

export const CardTitle: React.FC<CardProps> = ({ children, className }) => (
  <h2 className={`text-lg font-bold ${className}`}>{children}</h2>
);

export const CardDescription: React.FC<CardProps> = ({ children, className }) => (
  <p className={`text-sm text-gray-500 ${className}`}>{children}</p>
);
export default Card;