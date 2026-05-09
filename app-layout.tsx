import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Outside IR35 Jobs Scanner",
  description: "Find Azure DevOps Outside IR35 contract jobs instantly."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
