import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/footer";

export const metadata: Metadata = {
  title: "MY PORTFOLIO",
  description: "Portfolio by tehrim",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body>
        <Navbar/>
        <main className="relative overflow-hidden"> {children}</main>
       
        <Footer/>
        </body>
    </html>
  );
}


