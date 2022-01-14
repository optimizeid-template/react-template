import { css } from '@emotion/react';
import styled from '@emotion/styled';

const SectionBox = styled.div`
  margin: 24px 0;
  padding: 66px;
  background: #f9f9f9;
  border-radius: 24px;

  ${(props) =>
    props.backgroundGradient === 1 &&
    css`
      background: linear-gradient(290.79deg, #ffe8bf -10.79%, #c9d2f1 111.48%);
    `}

  ${(props) =>
    props.backgroundGradient === 2 &&
    css`
      background: linear-gradient(
        258.37deg,
        #ffe8bf -18.03%,
        #cfdfff 110.11%,
        #f9f9f9 110.11%
      );
    `}

    ${(props) =>
    props.backgroundGradient === 3 &&
    css`
      background: linear-gradient(266.1deg, #cfdfff -7.85%, #ffe8bf 104.65%);
    `}
`;

export default SectionBox;
