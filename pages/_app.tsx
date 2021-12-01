import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/globals.scss'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import type { AppContext, AppProps } from 'next/app'
import App from 'next/app';

config.autoAddCss = false; 

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps }
}

export default MyApp
