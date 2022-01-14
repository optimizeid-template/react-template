import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

const Wrapper = styled.div`
  margin: 24px 0;
  padding: 66px;
  background: rgba(249, 249, 249, 1);
  border-radius: 24px;

  ${(props) =>
    props.backgroundGradient &&
    css`
      background: linear-gradient(
        258.37deg,
        #ffe8bf -18.03%,
        #cfdfff 110.11%,
        #f9f9f9 110.11%
      );
    `}
`;

const Flex = styled.div`
  display: flex;
  align-items; center;

  ${(props) =>
    props.reverse &&
    css`
      flex-direction: row-reverse;
    `}
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
  background: #f4f5f4;
  border-radius: 5px;
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
`;

const Grid = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: auto auto;
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
`;

function FeatureSection({
  backgroundGradient = false,
  features = [],
  reverse = false,
}) {
  return (
    <Wrapper backgroundGradient={backgroundGradient}>
      <Flex reverse={reverse}>
        <FlexItem>
          <ImageWrapper reverse={reverse}>
            <ImagePlaceholder />
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
    </Wrapper>
  );
}

export default FeatureSection;
