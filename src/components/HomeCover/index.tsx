import React from 'react'
import Container from '../Container'

interface HomeCoverProps {
  title: string
  caption: string
  image: string
}

function HomeCover({ title, caption, image }: HomeCoverProps) {
  return (
    <div className="relative">
      <div className="bg-gradient-to-br from-[#ffe8bf] to-[#c9d2f1] rounded-3xl pb-[60%]" />
      <Container className="relative -mt-[50%]">
        <h3 className="font-bold text-[56px] leading-[76px] text-center text-[#373f41] max-w-[900px] mx-auto mb-6 md:text-[30px] md:leading-[35px]">
          {title}
        </h3>
        <div className="font-semibold text-base leading-[22px] text-center text-[#737b7d]">
          {caption}
        </div>
        <div
          className="pb-[50%] bg-[#f4f5f4] rounded-3xl mt-[10%] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${image})` }}
        />
      </Container>
    </div>
  )
}

export default HomeCover
