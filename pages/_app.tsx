import "../styles/globals.css";
import "@fontsource/inter/variable.css";
import "../styles/lineseed/100.css";
import "../styles/lineseed/300.css";
import "../styles/lineseed/700.css";
import "../styles/lineseed/900.css";
import Footer from "../components/footer";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
