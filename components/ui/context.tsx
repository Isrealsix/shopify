import { createContext, useContext } from "react";
interface IProps {
  children: React.ReactNode;
}

const UIContext = createContext<{ [key: string]: string }>({
  uiState: "defaultState",
});

export const UIProvider: React.FC<IProps> = ({ children }) => {
  return (
    <UIContext.Provider value={{ uiState: "something" }}>
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => {
  const context = useContext(UIContext);
  return context;
}
