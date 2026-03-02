import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Swaraj Dental & Implant Center | Your Smile, Our Mission | Modern Dental Care",
  description: "Experience premium, painless dental care at Swaraj Dental & Implant Center. Advanced technology, experienced dentists, and personalized treatments including Implants, Braces, and Smile Makeovers.",
  keywords: ["dental clinic", "swaraj dental", "implant center", "dentist near me", "teeth whitening", "dental implants", "painless dentistry"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
