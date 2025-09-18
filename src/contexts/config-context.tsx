import { createContext, useContext } from "react";

export const configContext = createContext<{
  templateConfig: Record<string, any>;
  setTemplateConfig?: (config: Record<string, any>) => void;
}>({ templateConfig: window.templateConfig });

export const useConfig = () => useContext(configContext);

export const ConfigProvider = configContext.Provider;
