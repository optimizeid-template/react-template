import React from 'react'
import Container from '../Container'
import Footer from '../Footer'
import Navigation from '../Navigation'

interface LayoutProps {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Navigation />

      <Container xl>{children}</Container>

      <Footer />
    </div>
  )
}

export default Layout
