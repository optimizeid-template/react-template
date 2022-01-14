import styled from '@emotion/styled';
import React from 'react';

const Wrapper = styled.div`
  background: #f9f9f9;
  border-radius: 24px;
  padding: 64px;
  margin-top: 24px;
  margin-bottom: 24px;
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

const LogoPlaceholder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  width: 100%;
  background: #fff;
  height: 100px;
  box-shadow: 0 3px 10px #eee;
  border-radius: 8px;
`;

function LogoList() {
  return (
    <Wrapper>
      <Title>This is the long title for explaining what happen here</Title>
      <Caption>
        Explanation sentences for describing the condition around here. Maybe it
        can be 2 sentences, no more.{' '}
      </Caption>

      <Grid>
        <LogoPlaceholder>Logo</LogoPlaceholder>
        <LogoPlaceholder>Logo</LogoPlaceholder>
        <LogoPlaceholder>Logo</LogoPlaceholder>
        <LogoPlaceholder>Logo</LogoPlaceholder>
        <LogoPlaceholder>Logo</LogoPlaceholder>
        <LogoPlaceholder>Logo</LogoPlaceholder>
        <LogoPlaceholder>Logo</LogoPlaceholder>
        <LogoPlaceholder>Logo</LogoPlaceholder>
      </Grid>
    </Wrapper>
  );
}

export default LogoList;
