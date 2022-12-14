import "../styles/globals.css";
import Navbar from "./shared/navbar";

function Layout({ children }) {
  return (
    <html>
      <head></head>
      <body className="wrapper">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

export default Layout;
