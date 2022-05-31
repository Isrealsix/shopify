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

type State = IStateValues & IStateModifiers;

const stateModifiers: IStateModifiers = {
  openSidebar: () => {},
  closeSidebar: () => {},
};

const initialState = { isSidebarOpen: false };

const UIContext = createContext<State>({
  ...stateModifiers,
  ...initialState,
});

export const UIProvider: React.FC<IProps> = ({ children }) => {
  const openSidebar = () => console.log("Opening sidebar");
  const closeSidebar = () => console.log("Closing sidebar");

  const value = {
    openSidebar,
    closeSidebar,
    isSidebarOpen: true,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

export const useUI = () => {
  const context = useContext(UIContext);
  return context;
};
