import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Kiara & Dimas | Wedding Invitation",
  description:
    "A romantic and elegant wedding invitation website built with Next.js and Tailwind CSS.",
  applicationName: "Wedding Invitation",
  keywords: ["wedding invitation", "next.js", "tailwind css", "static site"],
  authors: [{ name: "Codex" }]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
