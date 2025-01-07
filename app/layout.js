import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Video call with Saiking",
  description: "it is simple video call using next.js website ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <head>
       <link rel="icon" type="image/svg+xml" href="/logo.svg" />
    </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
