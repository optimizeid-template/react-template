import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import SectionBox from '../SectionBox/SectionBox';

const Flex = styled.div`
  display: flex;
  align-items; center;

  ${(props) =>
    props.reverse &&
    css`
      flex-direction: row-reverse;
    `}

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const FlexItem = styled.div`
  flex: 1 1 0;
  display: flex;
  align-items: center;
  width: 100%;
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  padding-bottom: 60%;
  background-image: url(${({ image }) => image});
  border-radius: 5px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  @media screen and (max-width: 768px) {
    margin-bottom: 24px;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  padding-right: 24px;

  ${(props) =>
    props.reverse &&
    css`
      padding-left: 24px;
      padding-right: 0;
    `}

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

const Grid = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: auto auto;

  @media screen and (max-width: 900px) {
    display: block;
  }
`;

const Feature = styled.div`
  font-size: 16px;
  line-height: 22px;
  color: #737b7d;

  label {
    display: block;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    color: #737b7d;
    margin-bottom: 16px;
  }

  @media screen and (max-width: 900px) {
    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }
`;

function FeatureSection({
  image = '',
  backgroundGradient,
  features = [],
  reverse = false,
}) {
  return (
    <SectionBox backgroundGradient={backgroundGradient}>
      <Flex reverse={reverse}>
        <FlexItem>
          <ImageWrapper reverse={reverse}>
            <ImagePlaceholder image={image} />
          </ImageWrapper>
        </FlexItem>
        <FlexItem>
          <Grid>
            {features.map((feature) => (
              <Feature key={feature.title}>
                <label>{feature.title}</label>
                <div>{feature.description}</div>
              </Feature>
            ))}
          </Grid>
        </FlexItem>
      </Flex>
    </SectionBox>
  );
}

export default FeatureSection;
