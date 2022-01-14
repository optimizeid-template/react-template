import React from 'react';
import Container from '../Container';
import Footer from '../Footer';
import Navigation from '../Navigation';

function Layout({ children }) {
  return (
    <div>
      <Navigation />

      <Container xl>{children}</Container>

      <Footer />
    </div>
  );
}

export default Layout;
