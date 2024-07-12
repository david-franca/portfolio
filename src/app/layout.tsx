import type { Metadata } from "next";
import "./globals.css";

import { Heebo, Kalam } from "next/font/google";

import { RefsProvider } from "@/context";

const kalam = Kalam({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-kalam",
});

const heebo = Heebo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heebo",
});

export const metadata: Metadata = {
  title: "David França",
  description: "Portfolio de David França",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${kalam.variable} ${heebo.variable}`}>
        <RefsProvider>{children}</RefsProvider>
      </body>
    </html>
  );
}
