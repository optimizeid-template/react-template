import React from 'react';
import Container from '../Container';
import Navigation from '../Navigation';

function Layout({ children }) {
  return (
    <div>
      <Navigation />

      <Container xl>{children}</Container>
    </div>
  );
}

export default Layout;
