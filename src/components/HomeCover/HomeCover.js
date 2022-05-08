import styled from '@emotion/styled';
import React from 'react';
import Container from '../Container/Container';

const Wrapper = styled.div`
  position: relative;
`;

const BackgroundBox = styled.div`
  background: linear-gradient(290.79deg, #ffe8bf -10.79%, #c9d2f1 111.48%);
  border-radius: 24px;
  padding-bottom: 60%;
`;

const ImageBox = styled.div`
  padding-bottom: 50%;
  background: #f4f5f4;
  border-radius: 24px;
  margin-top: 10%;
`;

const PageContainer = styled(Container)`
  position: relative;
  margin-top: calc(-60% + 10%);
`;

const Title = styled.h3`
  font-weight: bold;
  font-size: 56px;
  line-height: 76px;
  text-align: center;
  color: #373f41;
  max-width: 900px;
  margin: 0 auto;
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    font-size: 30px;
    line-height: 35px;
  }
`;

const Caption = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #737b7d;
`;

function HomeCover() {
  return (
    <Wrapper xl>
      <BackgroundBox />
      <PageContainer>
        <Title>Write beautifully on iPhone, iPad, and Mac</Title>
        <Caption>
          Dog is a bautiful, flexible app for crafting notes and prose
        </Caption>
        <ImageBox />
      </PageContainer>
    </Wrapper>
  );
}

export default HomeCover;
