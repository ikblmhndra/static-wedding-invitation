import type { Metadata } from "next";

import { invitationData } from "@/data/invitation";

import "./globals.css";

const names = `${invitationData.bride.shortName} & ${invitationData.groom.shortName}`;

export const metadata: Metadata = {
  title: `${names} | Wedding Invitation`,
  description: `A wedding of ${names} celebrating love, joy, and togetherness. Join us for a memorable day filled with cherished moments and heartfelt celebrations.`,
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
