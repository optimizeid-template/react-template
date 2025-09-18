import React from 'react'

interface DataPlaceholderProps {
  data: {
    number: string | number
    name: string
  }
}

function DataPlaceholder({ data }: DataPlaceholderProps) {
  return (
    <div>
      <div className="font-bold text-[44px] leading-[60px] text-[#1e4693]">
        {data.number}
      </div>
      <div className="font-semibold text-base leading-[22px] text-[#737b7d]">
        {data.name}
      </div>
    </div>
  )
}

export default DataPlaceholder
