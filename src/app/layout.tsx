import type { Metadata } from "next";
import { Outfit, Bebas_Neue } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Fahamedul Islam | Professional Footballer",
  description:
    "Official website of Fahamedul Islam — Bangladesh National Team & Sampdoria footballer. Career highlights, news, and more.",
  keywords: [
    "Fahamedul Islam",
    "Bangladesh football",
    "Sampdoria",
    "footballer",
    "national team",
  ],
  openGraph: {
    title: "Fahamedul Islam | Professional Footballer",
    description:
      "Official website of Fahamedul Islam — Bangladesh National Team footballer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${bebas.variable}`}>
      <body>{children}</body>
    </html>
  );
}
