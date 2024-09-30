import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from 'next/font/google';
import logo from "@/assets/logo.svg";


export const metadata: Metadata = {
  title: "My-Beats",
  description: "App pour partager des Beats and Musics Free.",
  openGraph: {
    images: logo,
  },
};

const font = Montserrat({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={font.className}
      >
        {children}
      </body>
    </html>
  );
}
