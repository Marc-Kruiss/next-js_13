import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Oswald } from "@next/font/google";

// If loading a variable font, you dont need to specify the font weight
const inter = Oswald();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />;
    </main>
  );
}
