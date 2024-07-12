import type { Metadata, Viewport } from "next";
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
  icons: {
    icon: [
      { rel: "icon", url: "/favicon.ico" },
      {
        rel: "apple-touch-icon",
        url: "/apple-touch-icon.png",
        sizes: "180x180",
      },
      {
        rel: "icon",
        url: "/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        rel: "icon",
        url: "/favicon-16x16.png",
        type: "image/png",
        sizes: "16x16",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#171023",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kalam.variable} ${heebo.variable}`}>
        <RefsProvider>{children}</RefsProvider>
      </body>
    </html>
  );
}
