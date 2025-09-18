import React from 'react'

interface LogoPlaceholderProps {
  image?: string
  className?: string
}

const LogoPlaceholder: React.FC<LogoPlaceholderProps> = ({ image, className = '' }) => {
  return (
    <div
      className={`flex justify-center items-center font-medium w-full h-[100px] rounded-lg bg-center bg-no-repeat bg-contain ${className}`}
      style={{ backgroundImage: image ? `url(${image})` : undefined }}
    />
  )
}

export default LogoPlaceholder
