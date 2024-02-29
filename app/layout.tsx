import type { Metadata } from "next";
import { Ubuntu, Overpass } from "@next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--ubuntu-font",
});
const overpass = Overpass({
  weight: ["300", "600"],
  subsets: ["latin"],
  variable: "--overpass-font",
});

export const metadata: Metadata = {
  title: "Blogr Landing Page",
  description: "This is a frontend mentor challenge.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ubuntu.variable} ${overpass.variable}`}>{children}</body>
    </html>
  );
}
