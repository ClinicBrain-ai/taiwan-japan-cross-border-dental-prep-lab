import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Taiwan-Japan Dental Prep Lab",
  description:
    "Local-first, synthetic-first prototype for cross-border dental care decision preparation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
