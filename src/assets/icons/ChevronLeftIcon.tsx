import React from 'react';

interface ChevronLeftIconProps {
  width?: number | string;
  color?: string;
}

const ChevronLeftIcon: React.FC<ChevronLeftIconProps> = ({
  width = 24,
  color = 'currentColor',
}) => {
  return (
    <svg
      width={width}
      height={width}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
};

export default ChevronLeftIcon;
