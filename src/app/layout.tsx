import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jannah",
  description: "Your daily reminder to be a better muslim!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9777328934038508"
     crossOrigin="anonymous"></script>
        <link
          rel="preload"
          href="/background.png"
          as="image"
          type="image/png"
        />
      </Head>
      <body className={`${montserrat.variable} antialiased h-screen`}>
        {children}
      </body>
    </html>
  );
}
