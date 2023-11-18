import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohitul Islam | Frontend Enginner Protfolio",
  description: "Mohitul Islam | Frontend Enginner Protfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
