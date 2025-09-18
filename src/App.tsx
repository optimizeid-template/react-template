import React, { lazy, Suspense, useEffect, useMemo, useState } from 'react'
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom'
import mock from '../public/_schema/mock.json'
import Layout from './components/Layout'
import Loading from './components/Loading'
import { ConfigProvider } from './contexts/config-context'
import './App.css'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))

function App() {
  const isIframe = window.self !== window.top
  const Router = isIframe ? MemoryRouter : BrowserRouter

  const [config, setConfig] = useState<Record<string, any>>(
    window.templateConfig ?? mock,
  )

  const configValue = useMemo(() => {
    return {
      templateConfig: config || {},
      setTemplateConfig: setConfig,
    }
  }, [config])

  useEffect(() => {
    const onUpdateConfig = (event: MessageEvent) => {
      const { data } = event

      if (data.type === 'updateConfig' && data.templateConfig) {
        setConfig(data.templateConfig)
      }
    }

    window.addEventListener('message', onUpdateConfig)

    return () => {
      window.removeEventListener('message', onUpdateConfig)
    }
  }, [])

  return (
    <ConfigProvider value={configValue}>
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
    </ConfigProvider>
  )
}

export default App
