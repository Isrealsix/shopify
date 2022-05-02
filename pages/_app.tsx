import { AppProps } from "next/app"
import React from "react";

const MyApp = ({Component, pageProps}: AppProps & {Component: {Layout: React.FC<{children: React.ReactNode}>}}) => {
  const Layout = Component.Layout;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;