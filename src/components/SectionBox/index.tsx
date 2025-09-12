import React from 'react';

interface SectionBoxProps {
  backgroundGradient?: number;
  children: React.ReactNode;
  className?: string;
}

const SectionBox: React.FC<SectionBoxProps> = ({ 
  backgroundGradient, 
  children, 
  className = '' 
}) => {
  const getBackgroundClass = () => {
    switch (backgroundGradient) {
      case 1:
        return 'bg-gradient-to-br from-[#ffe8bf] to-[#c9d2f1]';
      case 2:
        return 'bg-gradient-to-br from-[#ffe8bf] via-[#cfdfff] to-[#f9f9f9]';
      case 3:
        return 'bg-gradient-to-br from-[#cfdfff] to-[#ffe8bf]';
      default:
        return 'bg-[#f9f9f9]';
    }
  };

  return (
    <div 
      className={`my-6 px-[66px] py-[66px] rounded-3xl md:px-[30px] md:py-[30px] ${getBackgroundClass()} ${className}`}
    >
      {children}
    </div>
  );
};

export default SectionBox;