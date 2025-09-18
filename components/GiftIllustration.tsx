
import React from 'react';

const GiftIllustration: React.FC = () => (
    <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 w-96 h-96 opacity-20 pointer-events-none hidden lg:block animate-float"
        style={{ animationDuration: '8s' }} // Adjust animation for a gentle float
    >
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <linearGradient id="compassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#FBBF24' }} /> 
                    <stop offset="100%" style={{ stopColor: '#F59E0B' }} />
                </linearGradient>
                 <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            
            <g transform="translate(100 100) rotate(15)">
                <circle cx="0" cy="0" r="70" fill="url(#compassGradient)" opacity="0.1" filter="url(#glow)"/>
                <circle cx="0" cy="0" r="65" fill="none" stroke="url(#compassGradient)" strokeWidth="2" opacity="0.5"/>
                
                {/* Compass Needle */}
                <polygon points="0,-50 15,0 0,10 -15,0" fill="url(#compassGradient)" opacity="0.8">
                     <animateTransform 
                        attributeName="transform" 
                        type="rotate" 
                        from="0 0 0" 
                        to="360 0 0" 
                        dur="15s" 
                        repeatCount="indefinite"
                     />
                </polygon>

                {/* Cardinal Directions */}
                <text x="0" y="-48" textAnchor="middle" fontSize="10" fill="#FBBF24" fontWeight="bold" opacity="0.6">N</text>
                <text x="0" y="58" textAnchor="middle" fontSize="10" fill="#FBBF24" fontWeight="bold" opacity="0.6">S</text>
                <text x="52" y="5" textAnchor="middle" fontSize="10" fill="#FBBF24" fontWeight="bold" opacity="0.6">E</text>
                <text x="-52" y="5" textAnchor="middle" fontSize="10" fill="#FBBF24" fontWeight="bold" opacity="0.6">W</text>
            </g>
        </svg>
    </div>
);

export default GiftIllustration;