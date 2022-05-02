import { AppProps } from "next/app"
import React from "react";

type ReactFC = React.FC<{children: React.ReactNode}>;
const LayoutFallback: ReactFC = ({children}) => <> {children} </>;


const MyApp = ({Component, pageProps}: AppProps & {Component: {Layout: ReactFC}}) => {
  const Layout = Component.Layout ?? LayoutFallback;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;