import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./conmponents/Header";
import Footer from "./conmponents/Footer";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Abdur Rehman's portfolio",
  description: "ar's porfolio where his skills are ellaborated, and some projects Developed by AbdurRehman",
};

export default function RootLayout({
  children,
  
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      
    <html lang="en">
          <link rel="icon" href="public/favicon.ico" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
      <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
            rel="stylesheet"
          />
          <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
