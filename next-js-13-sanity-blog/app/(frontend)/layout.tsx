import Head from "./head";
import "../../styles/globals.css";
import Header from "../../components/Header";
import Providers from "../../components/Providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <Head />
      <body>
        <Providers>
          <Header />
          <main className="overflow-x-hidden text-slate-800 bg-gray-50 dark:bg-slate-900 dark:text-gray-50 transition-all duration-300 ease-out">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
