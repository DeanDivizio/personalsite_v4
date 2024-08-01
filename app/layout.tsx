import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "deandivizio.com",
  description: "The portfolio website for designer, developer, and media engineer, Dean Divizio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="absolute w-screen flex flex-row justify-center z-10">
          <nav className="pt-6 sm:pt-4 flex gap-5 w-36 items-center justify-center border-b pb-4 border-darkWhite" >
            <Link href={"/"} className="text-base sm:text-xl font-thin tracking-widest hover:font-extralight ">Home</Link>
            <Link href={"/work"} className="text-base sm:text-xl font-thin tracking-widest hover:font-extralight">Work</Link>
            <Link href={"/about"} className="text-base sm:text-xl font-thin tracking-widest hover:font-extralight">About</Link>
          </nav>
        </div>
        {children}
        </body>
    </html>
  );
}
