"use client";

import React from 'react';

export type ChartConfig = {
  label: string;
  color: string;
};

interface ChartContainerProps {
  config: ChartConfig;
  className?: string;
  children: React.ReactNode; // Define children prop here
}

export const ChartContainer: React.FC<ChartContainerProps> = ({
  config,
  className,
  children,
}) => {
  return (
    <div className={`border border-gray-300 rounded-lg p-4 ${className}`}>
      {children}
    </div>
  );
};

export default ChartContainer;
