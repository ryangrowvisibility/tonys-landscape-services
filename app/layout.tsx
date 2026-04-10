import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tony's Landscape Services | Licensed Landscaper in Fresno, CA",
  description:
    "Tony's Landscape Services — CA Licensed Landscape Contractor #898234. Serving Fresno since 2007. Lawn maintenance, landscape design, irrigation, tree trimming, and more. Call (559) 352-7859.",
  openGraph: {
    title: "Tony's Landscape Services | Licensed Landscaper in Fresno, CA",
    description:
      "Fresno's trusted licensed landscaper since 2007. CA Contractor License #898234. Professional lawn maintenance, landscape design, and irrigation services.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&family=Karla:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
