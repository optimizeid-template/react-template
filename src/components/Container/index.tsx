import React from 'react'

interface ContainerProps {
  xl?: boolean
  children: React.ReactNode
  className?: string
}

const Container: React.FC<ContainerProps> = ({ xl = false, children, className = '' }) => {
  const maxWidthClass = xl ? 'max-w-[1318px]' : 'max-w-[1180px]'

  return (
    <div className={`${maxWidthClass} mx-auto px-5 ${className}`}>
      {children}
    </div>
  )
}

export default Container
