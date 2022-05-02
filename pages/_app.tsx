import { AppProps } from "next/app"

const MyApp = ({Component, PageProps}: AppProps) => {
  return (
    <>
      <Component {...PageProps} />
    </>
  )
}

export default MyApp;