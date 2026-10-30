import React from 'react';

const RobotLogo = ({ className = "w-full h-full" }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" fill="#A475D6" />
        <path d="M 10 30 Q 10 20 20 20 L 80 20 Q 90 20 90 30 L 90 40 Q 90 50 80 50 L 65 50 L 55 58 Q 50 62 45 58 L 35 50 L 20 50 Q 10 50 10 40 Z" fill="#221C26" />
        <path d="M 18 32 Q 18 28 23 28 L 77 28 Q 82 28 82 32 L 82 38 Q 82 43 77 43 L 60 43 L 55 47 Q 50 51 45 47 L 40 43 L 23 43 Q 18 43 18 38 Z" fill="#FA4646" />
        <polygon points="35,20 48,20 30,50 17,50" fill="white" fillOpacity="0.15" />
        <rect x="40" y="70" width="20" height="6" rx="3" fill="#221C26" />
    </svg>
);

export default RobotLogo;
