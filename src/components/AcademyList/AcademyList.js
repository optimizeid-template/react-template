import styled from '@emotion/styled';
import React from 'react';
import SectionBox from '../SectionBox/SectionBox';

const Title = styled.h4`
  font-weight: bold;
  font-size: 32px;
  line-height: 44px;
  text-align: center;
  color: #373f41;
  margin: 0;
  margin-bottom: 48px;
`;

const Grid = styled.div`
  display: grid;
  gap: 25px;
  grid-template-columns: 33.33% 33.33% 33.33%;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const PostImage = styled.div`
  width: 100%;
  padding-bottom: 60%;
  background-color: #f4f5f4;
  margin-bottom: 24px;

  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const PostTitle = styled.h3`
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  color: #000000;
  margin: 0;
  margin-bottom: 8px;
`;

const PostDescription = styled.div`
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  color: #737b7d;

  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

function Post({ title, description, image, url }) {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <div>
        <PostImage image={image} />
        <PostTitle>{title}</PostTitle>
        <PostDescription>{description}</PostDescription>
      </div>
    </a>
  );
}

function AcademyList({ title, cards }) {
  return (
    <SectionBox>
      <Title>{title}</Title>

      <Grid>
        {cards.map((card) => (
          <Post key={card.title} {...card} />
        ))}
      </Grid>
    </SectionBox>
  );
}

export default AcademyList;
