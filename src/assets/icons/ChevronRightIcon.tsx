import React from 'react';

interface ChevronRightIconProps {
  width?: number | string;
  color?: string;
}

const ChevronRightIcon: React.FC<ChevronRightIconProps> = ({
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
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
};

export default ChevronRightIcon;
