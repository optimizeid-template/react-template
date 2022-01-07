import React from 'react';
import styled from '@emotion/styled';
import Footer from './Footer';
import Header from './Header';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #EDF2F7;
  min-height: 100vh;
`;

const Content = styled.div`
  flex-grow: 1;
`;

function Layout({ children }) {
  return (
    <Wrapper>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Wrapper>
  );
}

export default Layout;
