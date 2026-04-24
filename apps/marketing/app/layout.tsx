import type { Metadata } from "next";
import "@repo/ui/globals.css";

export const metadata: Metadata = {
  title: "rodiontuluc",
  description: "Marketing site"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
