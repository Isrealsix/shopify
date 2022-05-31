import { createContext, useContext, useState } from "react";
interface IProps {
  children: React.ReactNode;
}

export interface IStateModifiers {
  openSidebar: () => void;
  closeSidebar: () => void;
}

export interface IStateValues {
  isSidebarOpen: boolean;
}

const stateModifiers: IStateModifiers = {};

const UIContext = createContext<{ [key: string]: any }>({
  uiState: "defaultState",
});

export const UIProvider: React.FC<IProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const uiState = {
    sidebarOpen,
    setSidebarOpen,
  };
  return <UIContext.Provider value={uiState}>{children}</UIContext.Provider>;
};

export const useUI = () => {
  const context = useContext(UIContext);
  return context;
};
