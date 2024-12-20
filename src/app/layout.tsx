import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "spaceshop",
  description: "O lugar que a complexidade e magia do universo se aliam em um só objetivo, atender suas expectativas!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${karla.className} antialiased bg-zinc-300 flex justify-center min-h-screen py-8 px-2 xl:px-[150px] pb-20`}
      >
        {children}
      </body>
    </html>
  );
}
