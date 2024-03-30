import type { Metadata } from "next";

import { manrope, inter, poppins } from "@/fonts";
import { Header } from "@/app/_components";
import "../styles/globals.scss";

// eslint-disable-next-line react-refresh/only-export-components
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
        <main>{children}</main>
      </body>
    </html>
  );
}
