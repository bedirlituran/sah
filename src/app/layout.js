import "./globals.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
export const metadata = {
  title: "CAMSISTEMS",
  description: "Təhlükəsizlik kameraları",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased overflow-x-hidden`}
      >
         <Navbar/>
        {children}
      </body>
      <Footer/>
    </html>
  );
}
