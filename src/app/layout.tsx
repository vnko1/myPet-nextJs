import type { Metadata } from "next";
import { Header } from "@/components";
import { manrope, inter, poppins } from "@/fonts/fonts";
import "../styles/globals.scss";

export const metadata: Metadata = {
  title: "My Pet App",
  description: "My Pet app - applications about pets",
};

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
        <Header />
        {children}
      </body>
    </html>
  );
}
