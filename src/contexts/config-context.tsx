import { createContext, use } from 'react'

export const configContext = createContext<{
  templateConfig: Record<string, any>
  setTemplateConfig?: (config: Record<string, any>) => void
}>({ templateConfig: window.templateConfig })

export const useConfig = () => use(configContext)

export const ConfigProvider = configContext.Provider
