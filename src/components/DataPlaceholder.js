import styled from '@emotion/styled';
import React from 'react';

const Percentage = styled.div`
  font-weight: bold;
  font-size: 44px;
  line-height: 60px;
  color: #1e4693;
`;

const Caption = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #737b7d;
`;

function DataPlaceholder({ data }) {
  return (
    <div>
      <Percentage>{data.number}</Percentage>
      <Caption>{data.name}</Caption>
    </div>
  );
}

export default DataPlaceholder;
