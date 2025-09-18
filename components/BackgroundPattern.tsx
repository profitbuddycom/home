
import React from 'react';

const BackgroundPattern: React.FC = () => {
  return (
    <div
      className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
      aria-hidden="true"
    >
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="chevron"
            patternUnits="userSpaceOnUse"
            width="40"
            height="80"
            patternTransform="rotate(45)"
          >
            <path
              d="M0 20 L20 40 L0 60"
              stroke="#e7e5e4" 
              strokeWidth="2"
              fill="none"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#chevron)" />
      </svg>
    </div>
  );
};

export default BackgroundPattern;
