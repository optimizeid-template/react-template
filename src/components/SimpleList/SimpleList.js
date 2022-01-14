import styled from '@emotion/styled';
import React from 'react';
import SectionBox from '../SectionBox/SectionBox';

const Wrapper = styled(SectionBox)`
  text-align: center;
`;

const Title = styled.h4`
  font-weight: bold;
  font-size: 32px;
  line-height: 44px;
  color: #373f41;
  margin: 0;
  margin-bottom: 16px;
`;

const Caption = styled.div`
  font-size: 20px;
  line-height: 27px;
  color: #373f41;
  margin-bottom: 40px;
`;

const Grid = styled.div`
  display: grid;
  gap: 40px;
  grid-template-columns: auto auto auto auto;
  max-width: 700px;
  margin: 0 auto;
`;

function LogoList({ backgroundGradient, children }) {
  return (
    <Wrapper backgroundGradient={backgroundGradient}>
      <Title>This is the long title for explaining what happen here</Title>
      <Caption>
        Explanation sentences for describing the condition around here. Maybe it
        can be 2 sentences, no more.{' '}
      </Caption>

      <Grid>{children}</Grid>
    </Wrapper>
  );
}

export default LogoList;
