'use client';  // این کامپوننت کلاینت است
import 'bootstrap/dist/css/bootstrap.min.css'; // وارد کردن استایل‌های Bootstrap
import { usePathname } from 'next/navigation';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "fontsource-vazir";
import "@fortawesome/fontawesome-free/css/all.css";
import Head from 'next/head';
import { ThemeProvider } from '@/context/ThemeContext';
import Header from '@/components/header';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function Layout({ children }) {


  return (
    <>
      <ThemeProvider>
  
          <html lang="en" dir="rtl">
            <body>
            <header>
              <Header/>
            </header>
            {children}
            </body>
          </html>
          </ThemeProvider>
      
    </>
  );
}

