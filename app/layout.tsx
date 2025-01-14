import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "deandivizio.com",
  description: "Hi, I'm Dean. This is my website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleAnalytics gaId="G-B4LMP9JX7Y" />
        <div className="absolute w-screen flex flex-row justify-center z-10">
          <nav className="pt-8 sm:pt-6 flex flex-wrap px-12 gap-4 sm:gap-8 items-center justify-center pb-4" >
            <Link href={"/"} className="text-base sm:text-xl font-thin tracking-widest hover:font-extralight ">Home</Link>
            <Link href={"/work"} className="text-base sm:text-xl font-thin tracking-widest hover:font-extralight">My Work</Link>
            <Link href={"/about"} className="text-base sm:text-xl font-thin tracking-widest hover:font-extralight">About</Link>
            <Link href={"/references"} className="text-base sm:text-xl font-thin tracking-widest hover:font-extralight">References</Link>
            <Link href={"/blog"} className="text-base sm:text-xl font-thin tracking-widest hover:font-extralight">Blog</Link>
          </nav>
        </div>
        {children}
        <div className="w-screen flex flex-row justify-center z-10 bottom-0 pb-2 pt-2 gap-2 bg-black text-xs font-extralight text-darkWhite">
          {`Copyright 2024 Dean Divizio`} <span>{`|`}</span><a className="transition underline hover:text-offWhite" href="mailto:contact@deandivizio.com">{`Contact Me`}</a>
          <Link className="transition underline hover:text-offWhite" href="/">{`Home`}</Link>
          <Link className="transition underline hover:text-offWhite" href="/work">{`Work`}</Link>
          <Link className="transition underline hover:text-offWhite" href="/about">{`About`}</Link>
          {/* <Link className="transition underline hover:text-offWhite" href="/blog">{`Blog`}</Link> */}
          </div>
        </body>
    </html>
  );
}
