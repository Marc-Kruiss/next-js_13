import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "@next/font/google";

// If loading a variable font, you dont need to specify the font weight
const inter = Inter();

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
