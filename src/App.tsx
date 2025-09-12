import React, { lazy, Suspense } from 'react'
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Loading from './components/Loading'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))

function App() {
  const isIframe = window.self !== window.top
  const Router = isIframe ? MemoryRouter : BrowserRouter

  return (
    <Router>
      <Layout>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  )
}

export default App
