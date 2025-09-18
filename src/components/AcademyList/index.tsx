import React from 'react'
import SectionBox from '../SectionBox'

interface PostProps {
  title: string
  description: string
  image: string
  url: string
}

interface AcademyListProps {
  title: string
  cards: PostProps[]
}

function Post({ title, description, image, url }: PostProps) {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <div>
        <div
          className="w-full pb-[60%] bg-[#f4f5f4] mb-6 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${image})` }}
        />
        <h3 className="font-bold text-lg leading-[25px] text-center text-black m-0 mb-2">
          {title}
        </h3>
        <div className="text-sm leading-[19px] text-center text-[#737b7d] md:mb-5">
          {description}
        </div>
      </div>
    </a>
  )
}

function AcademyList({ title, cards }: AcademyListProps) {
  return (
    <SectionBox>
      <h4 className="font-bold text-[32px] leading-[44px] text-center text-[#373f41] m-0 mb-12">
        {title}
      </h4>

      <div className="grid gap-[25px] grid-cols-3 mx-auto md:block">
        {cards.map(card => (
          <Post key={card.title} {...card} />
        ))}
      </div>
    </SectionBox>
  )
}

export default AcademyList
