import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";
import { Providers } from "@/_services/providers";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio of David F.",
};

interface RootLayoutProps extends PropsWithChildren {
  params: {
    locale: string;
  };
}
export default async function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            {children}
            <PrismicPreview repositoryName={repositoryName} />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
