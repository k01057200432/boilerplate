import type { Metadata } from "next";
import './globals.css'



export const metadata: Metadata = {
  title: "Boilerplate",
  description: "Create Boilerplate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
