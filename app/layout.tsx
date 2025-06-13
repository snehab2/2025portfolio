import type { Metadata } from "next";
import { Geist, Geist_Mono, Fredoka, Baskervville} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fredoka = Fredoka({
  variable: '--font-fredoka',
  subsets: ['latin'],
});

const baskervville = Baskervville({
    variable: '--font-baskervville',
    subsets: ['latin'], 
    weight: '400'
});

export const metadata: Metadata = {
  title: "Sneha's Portfolio",
  description: "2025 Portfolio showcasing art and coding projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fredoka.variable} ${baskervville.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
