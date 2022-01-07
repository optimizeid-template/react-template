import React from 'react';
import styled from '@emotion/styled';

const CopyFooter = styled.footer`
  text-align: center;
  padding: 16px;
  font-size: 14px;
`;

function Footer() {
  return (
    <CopyFooter>
      Copyright &copy; Optimize.id {new Date().getFullYear()}
    </CopyFooter>
  );
}

export default Footer;
