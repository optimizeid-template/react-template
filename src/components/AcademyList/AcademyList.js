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
  grid-template-columns: 33.3% 33.3% 33.3%;
  margin: 0 auto;
`;

const PostImage = styled.div`
  width: 100%;
  padding-bottom: 60%;
  background-color: #f4f5f4;
  margin-bottom: 24px;
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
`;

function Post() {
  return (
    <div>
      <PostImage />
      <PostTitle>Title Blog</PostTitle>
      <PostDescription>
        This is placeholder text for explaining to user about your company or
        your services. This is placeholder text for explaining to user about
        your company or your services.{' '}
      </PostDescription>
    </div>
  );
}

function AcademyList() {
  return (
    <SectionBox>
      <Title>Academy</Title>

      <Grid>
        <Post />
        <Post />
        <Post />
      </Grid>
    </SectionBox>
  );
}

export default AcademyList;
