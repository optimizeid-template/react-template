import React from 'react'
import SectionBox from '../SectionBox'

interface LogoListProps {
  title: string
  caption: string
  backgroundGradient?: number
  children: React.ReactNode
}

function LogoList({ title, caption, backgroundGradient, children }: LogoListProps) {
  return (
    <SectionBox backgroundGradient={backgroundGradient} className="text-center">
      <h4 className="font-bold text-[32px] leading-[44px] text-[#373f41] m-0 mb-4">
        {title}
      </h4>
      <div className="text-[20px] leading-[27px] text-[#373f41] mb-10">
        {caption}
      </div>

      <div className="grid gap-10 grid-cols-4 max-w-[700px] mx-auto md:grid-cols-2">
        {children}
      </div>
    </SectionBox>
  )
}

export default LogoList
