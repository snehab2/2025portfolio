import type { Metadata } from "next";
import { Readex_Pro, Outfit, IBM_Plex_Sans} from "next/font/google";
import "./globals.css";


const readexPro = Readex_Pro({
  variable: '--font-readex-pro',
  subsets: ['latin'],
});

const outfit = Outfit({
    variable: '--font-outfit',
    subsets: ['latin'], 
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-ibm-plex-sans',
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
        className={`${ibmPlexSans.variable} ${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
