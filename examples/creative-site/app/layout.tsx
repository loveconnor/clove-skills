import type { Metadata } from "next";
import "@fontsource-variable/archivo/wdth.css";
import "@fontsource-variable/instrument-sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clove — Skills for Thoughtful Product Work",
  description:
    "Clove is a library of nine Codex skills for specific, truthful, accessible, maintainable product work.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Clove — Better judgment before output",
    description: "Explore nine practical skills for product design, content, discovery, and engineering work.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
