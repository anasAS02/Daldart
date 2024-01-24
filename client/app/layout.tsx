import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StatusContextProvider } from "./utils/globalStatus";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daldart",
  description: "Daldart",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StatusContextProvider>
          {children}
        </StatusContextProvider>
      </body>
    </html>
  );
}
