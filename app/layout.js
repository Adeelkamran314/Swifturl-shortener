import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SwiftURL-Yuor trusted URL shortener",
  icons: {
    icon: "/logo.png",
  },
  description: "bitlinks helps you shorten your Urls easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-purple-50`}
      >
        <Navbar/>
        {children}
                <ToastContainer position="top-right" autoClose={3000} />

      </body>
    </html>
  );
}
