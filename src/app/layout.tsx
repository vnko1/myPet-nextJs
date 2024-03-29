import type { Metadata } from "next";
import { manrope, inter, poppins } from "@/app/fonts";
import "../styles/globals.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${inter.variable} ${poppins.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
