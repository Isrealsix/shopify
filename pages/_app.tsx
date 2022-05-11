import "assets/main.css";
import { UIProvider, useUI } from "@components/ui/context";
import { AppProps } from "next/app";
import React from "react";

type ReactFC = React.FC<{ children: React.ReactNode }>;
const LayoutFallback: ReactFC = ({ children }) => <> {children} </>;
const MyApp = ({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: ReactFC } }) => {
  const Layout = Component.Layout ?? LayoutFallback;
  const ui = useUI();
  console.log(ui);
  // When we use the useUI outside a component that is not wrapped by the UIProvider, we only get the default state
  return (
    <UIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UIProvider>
  );
};

export default MyApp;
